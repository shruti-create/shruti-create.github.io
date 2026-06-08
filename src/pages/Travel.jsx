import { useRef, useState, useEffect, useMemo } from 'react'
import Globe from 'react-globe.gl'
import * as topojson from 'topojson-client'
import * as THREE from 'three'
import locationData from '../data/locations.json'

// Edit locations in src/data/locations.json
// countryId = ISO 3166-1 numeric (US=840, Canada=124, India=356, etc.)
// stateId   = US FIPS code as zero-padded string (CA="06", NY="36", etc.)
const LOCATIONS       = locationData.locations
const EXTRA_LOCATIONS = locationData.extraLocations
const ALL_LOCATIONS   = [...LOCATIONS, ...EXTRA_LOCATIONS]

const US_ID = 840
const TOTAL_COUNTRIES = 195

const visitedCountryIds = new Set(ALL_LOCATIONS.map(l => Number(l.countryId)))
const visitedStateFips  = new Set(
  ALL_LOCATIONS.map(l => l.stateId ? String(l.stateId).padStart(2, '0') : null).filter(Boolean)
)

export default function Travel() {
  const globeRef     = useRef()
  const containerRef = useRef()
  const [polys, setPolys]       = useState([])
  const [sz, setSz]             = useState(580)
  const [active, setActive] = useState(null)

  // Ocean globe material — warm ocean blue, no texture
  const globeMat = useMemo(() => new THREE.MeshPhongMaterial({
    color:    new THREE.Color('#3A5F8A'),
    specular: new THREE.Color('#1A2E4A'),
    shininess: 12,
  }), [])

  // Responsive globe size
  useEffect(() => {
    const update = () => {
      if (containerRef.current) setSz(Math.min(containerRef.current.clientWidth, 760))
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  // Load world countries (excluding US) + US states
  useEffect(() => {
    Promise.all([
      fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json').then(r => r.json()),
      fetch('https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json').then(r => r.json()),
    ]).then(([worldTopo, usTopo]) => {
      const world = topojson.feature(worldTopo, worldTopo.objects.countries).features
        .filter(f => Number(f.id) !== US_ID)
        .map(f => ({ ...f, properties: { ...f.properties, visited: visitedCountryIds.has(Number(f.id)), kind: 'country' } }))

      const states = topojson.feature(usTopo, usTopo.objects.states).features
        .map(f => ({
          ...f,
          properties: {
            ...f.properties,
            visited: visitedStateFips.has(String(f.id).padStart(2, '0')),
            kind: 'state',
          },
        }))

      setPolys([...world, ...states])
    })
  }, [])

  // Point globe at US once data loads
  useEffect(() => { 
    if (!polys.length) return
    const t = setTimeout(() => {
      globeRef.current?.pointOfView({ lat: 38, lng: -96, altitude: 1.5 }, 1200)
    }, 400)
    return () => clearTimeout(t)
  }, [polys.length])

  const visitedCountries = visitedCountryIds.size
  const visitedStates    = visitedStateFips.size
  const pct              = ((visitedCountries / TOTAL_COUNTRIES) * 100).toFixed(2)

  return (
    <main className="page-wrap travel-page-wrap">
      <div className="travel-header">
        <div>
          <h2 className="page-heading">Places I've Been</h2>
          <p className="page-desc">Drag the globe · hover pins for details · visited areas glow green</p>
        </div>

        <div className="travel-pct-card">
          <div className="travel-pct-num">
            {pct}<span className="travel-pct-sign">%</span>
          </div>
          <div className="travel-pct-label">of the world visited</div>
          <div className="travel-pct-detail">
            {visitedCountries}&nbsp;/&nbsp;{TOTAL_COUNTRIES} countries
            &nbsp;·&nbsp;{visitedStates} US states
          </div>
          <div className="travel-pct-bar">
            <div className="travel-pct-fill" style={{ width: `${Math.max(parseFloat(pct), 0.4)}%` }} />
          </div>
        </div>
      </div>

      <div className="page-divider" />

      <div className="travel-layout">
        <div className="travel-globe-side" ref={containerRef}>
          <Globe
            ref={globeRef}
            width={sz}
            height={sz}
            backgroundColor="rgba(0,0,0,0)"
            globeImageUrl={null}
            globeMaterial={globeMat}
            showAtmosphere
            atmosphereColor="#C9A96E"
            atmosphereAltitude={0.18}
            showGraticules
            polygonsData={polys}
            polygonCapColor={f =>
              f.properties.visited ? 'rgba(74,124,89,0.92)' : 'rgba(196,168,130,0.78)'}
            polygonSideColor={f =>
              f.properties.visited ? 'rgba(46,100,60,0.4)' : 'rgba(139,99,71,0.18)'}
            polygonStrokeColor={() => 'rgba(139,99,71,0.35)'}
            polygonAltitude={f => f.properties.visited ? 0.016 : 0.003}
            pointsData={ALL_LOCATIONS}
            pointLat={d => d.lat}
            pointLng={d => d.lon}
            pointColor={d => '#4F7942'}
            pointAltitude={0.06}
            pointRadius={0.6}
            pointLabel={d =>
              `<div style="background:#3D2B1F;color:#FAF4E4;padding:7px 11px;border-radius:5px;font-family:Inter,sans-serif;font-size:12px;line-height:1.5;max-width:200px">` +
              `<strong>${d.name}</strong><br/>` +
              `<span style="opacity:.65;font-size:10px;text-transform:uppercase;letter-spacing:.5px">${d.type}</span><br/>` +
              `${d.desc}</div>`
            }
          />
          <p className="travel-hint">drag to rotate · scroll to zoom · hover pins</p>
        </div>

        <div className="travel-location-list">
          <div className="section-eyebrow" style={{ marginBottom: '1rem' }}>My Locations</div>
          {LOCATIONS.map((loc, i) => (
            <div
              key={i}
              className={`travel-loc-card${active === i ? ' travel-loc-active' : ''}`}
              onClick={() => {
                setActive(active === i ? null : i)
                globeRef.current?.pointOfView({ lat: loc.lat, lng: loc.lon, altitude: 1.4 }, 800)
              }}
            >
              <span className="travel-loc-dot" style={{ background: '#4F7942' }} />
              <div className="travel-loc-info">
                <div className="travel-loc-name">{loc.name}</div>
                <div className="travel-loc-type">{loc.type}</div>
                {active === i && <div className="travel-loc-desc">{loc.desc}</div>}
              </div>
            </div>
          ))}

          <p className="travel-parks-hint">
            can you tell I go to a lot of national parks? ↓
          </p>

          <div className="travel-legend">
            <div className="travel-legend-row">
              <span className="travel-legend-dot" style={{ background: 'rgba(74,124,89,0.92)' }} />
              Visited
            </div>
            <div className="travel-legend-row">
              <span className="travel-legend-dot" style={{ background: '#4F7942' }} />
              Not yet
            </div>
          </div>
        </div>
      </div>

      {EXTRA_LOCATIONS.length > 0 && (
        <div className="travel-extra-panel">
          <div className="section-eyebrow" style={{ marginBottom: '.75rem' }}>More Places</div>
          <div className="travel-extra-scroll">
            <ul className="travel-extra-grid">
              {EXTRA_LOCATIONS.map((loc, i) => (
                <li
                  key={i}
                  className="travel-extra-item"
                  onClick={() => globeRef.current?.pointOfView({ lat: loc.lat, lng: loc.lon, altitude: 1.4 }, 800)}
                >
                  <span className="travel-loc-dot" style={{ background: '#4F7942'}} />
                  <div className="travel-extra-info">
                    <span className="travel-extra-name">{loc.name}</span>
                    <span className="travel-extra-type">{loc.type}</span>
                    {loc.desc && <span className="travel-extra-desc">{loc.desc}</span>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </main>
  )
}
