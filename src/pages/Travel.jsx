import { useRef, useState, useEffect, useMemo } from 'react'
import Globe from 'react-globe.gl'
import * as topojson from 'topojson-client'
import * as THREE from 'three'

// ── Featured locations — shown as cards in the sidebar ──────────────────────
// countryId = ISO 3166-1 numeric (US=840, Japan=392, etc.)
// stateId   = US FIPS code as zero-padded string (CA="06", NY="36", NM="35")
//             Leave null / omit for non-US locations
const LOCATIONS = [
  {
    name: 'New York, NY',
    lat: 40.7128, lon: -74.006,
    countryId: 840, stateId: '36',
    color: '#B44040', type: 'School',
    desc: 'Columbia University — MS Computer Science (2025–2026)',
  },
  {
    name: 'San Diego, CA',
    lat: 32.7157, lon: -117.1611,
    countryId: 840, stateId: '06',
    color: '#4A7C59', type: 'School & Work',
    desc: 'UC San Diego · Lipomi Lab · Boolean Lab · ServiceNow 2024',
  },
  {
    name: 'Santa Clara, CA',
    lat: 37.3541, lon: -121.9552,
    countryId: 840, stateId: '06',
    color: '#C9A96E', type: 'Work',
    desc: 'ServiceNow HQ — SWE Intern (2025)',
  },
  {
    name: 'San Jose, CA',
    lat: 37.3382, lon: -121.8863,
    countryId: 840, stateId: '06',
    color: '#B44040', type: 'Home',
    desc: 'Home base — Bay Area, California',
  },
]

// ── Extra locations — pins on globe + dropdown list, no cards ────────────────
const EXTRA_LOCATIONS = [
  // Examples — edit or add your own:
  {
    name: 'Yosemite National Park',
    lat: 37.8651, lon: -119.5383,
    countryId: 840, stateId: '06',
    color: '#4F7942', type: 'National Park',
    desc: 'California',
  },
  {
    name: 'Sequoia National Park',
    lat: 36.4864, lon: -118.5658,
    countryId: 840, stateId: '06',
    color: '#4F7942', type: 'National Park',
    desc: 'California',
  },
  {
    name: 'Kings Canyon National Park',
    lat: 36.8879, lon: -118.5551,
    countryId: 840, stateId: '06',
    color: '#4F7942', type: 'National Park',
    desc: 'California',
  },
  {
    name: 'Redwood National Park',
    lat: 41.2132, lon: -124.0046,
    countryId: 840, stateId: '06',
    color: '#4F7942', type: 'National Park',
    desc: 'California',
  },
  {
    name: 'Joshua Tree National Park',
    lat: 33.8734, lon: -115.9010,
    countryId: 840, stateId: '06',
    color: '#4F7942', type: 'National Park',
    desc: 'California',
  },
  {
    name: 'Lassen Volcanic National Park',
    lat: 40.4977, lon: -121.4207,
    countryId: 840, stateId: '06',
    color: '#4F7942', type: 'National Park',
    desc: 'California',
  },
  {
    name: 'Crater Lake National Park',
    lat: 42.9446, lon: -122.1090,
    countryId: 840, stateId: '41',
    color: '#4F7942', type: 'National Park',
    desc: 'Oregon',
  },
  {
    name: 'Death Valley National Park',
    lat: 36.5054, lon: -117.0794,
    countryId: 840, stateId: '06',
    color: '#4F7942', type: 'National Park',
    desc: 'California/Nevada',
  },
  {
    name: 'Zion National Park',
    lat: 37.2982, lon: -113.0263,
    countryId: 840, stateId: '49',
    color: '#4F7942', type: 'National Park',
    desc: 'Utah',
  },
  {
    name: 'Bryce Canyon National Park',
    lat: 37.5930, lon: -112.1871,
    countryId: 840, stateId: '49',
    color: '#4F7942', type: 'National Park',
    desc: 'Utah',
  },
  {
    name: 'Arches National Park',
    lat: 38.7331, lon: -109.5925,
    countryId: 840, stateId: '49',
    color: '#4F7942', type: 'National Park',
    desc: 'Utah',
  },
  {
    name: 'Canyonlands National Park',
    lat: 38.3269, lon: -109.8783,
    countryId: 840, stateId: '49',
    color: '#4F7942', type: 'National Park',
    desc: 'Utah',
  },
  {
    name: 'Capitol Reef National Park',
    lat: 38.3670, lon: -111.2615,
    countryId: 840, stateId: '49',
    color: '#4F7942', type: 'National Park',
    desc: 'Utah',
  },
  {
    name: 'Yellowstone National Park',
    lat: 44.4280, lon: -110.5885,
    countryId: 840, stateId: '56',
    color: '#4F7942',
    type: 'National Park',
    desc: 'Wyoming, Montana, Idaho',
  },
  {
    name: 'Vancouver, Canada',
    lat: 49.2827, lon: -123.1207,
    countryId: 124,
    color: '#C9A96E',
    type: 'City',
    desc: 'British Columbia, Canada',
  },
  {
    name: 'Niagara Falls, Canada',
    lat: 43.0896, lon: -79.0849,
    countryId: 124,
    color: '#4F7942',
    type: 'Natural Wonder',
    desc: 'Ontario, Canada',
  },
  {
    name: 'La Bufadora',
    lat: 31.7246, lon: -116.7216,
    countryId: 484,
    color: '#4F7942',
    type: 'Natural Wonder',
    desc: 'Ensenada, Baja California, Mexico',
  },
    {
    name: 'Las Vegas, Nevada',
    lat: 36.1699, lon: -115.1398,
    countryId: 840,
    stateId: '32',
    color: '#C9A96E',
    type: 'City',
    desc: 'Nevada, USA',
  },
  {
    name: 'Richmond, Virginia',
    lat: 37.5407, lon: -77.4360,
    countryId: 840,
    stateId: '51',
    color: '#C9A96E',
    type: 'City',
    desc: 'Virginia, USA',
  },
  {
    name: 'Baltimore, Maryland',
    lat: 39.2904, lon: -76.6122,
    countryId: 840,
    stateId: '24',
    color: '#C9A96E',
    type: 'City',
    desc: 'Maryland, USA',
  },
  {
    name: 'Hyderabad, India',
    lat: 17.3850, lon: 78.4867,
    countryId: 356,
    color: '#C9A96E',
    type: 'City',
    desc: 'Telangana, India',
  },
  {
    name: 'Philadelphia, Pennsylvania',
    lat: 39.9526, lon: -75.1652,
    countryId: 840,
    stateId: '42',
    color: '#C9A96E',
    type: 'City',
    desc: 'Pennsylvania, USA',
  },
  {
    name: 'Yellowstone North Entrance',
    lat: 45.0260, lon: -110.7023,
    countryId: 840,
    stateId: '30',
    color: '#4F7942',
    type: 'National Park',
    desc: 'Montana, USA',
  },
  {
    name: 'Punta Cana, Dominican Republic',
    lat: 18.5601, lon: -68.3725,
    countryId: 214,
    color: '#C9A96E',
    type: 'City',
    desc: 'La Altagracia Province, Dominican Republic',
  },
  {
    name: 'Yellowstone National Park (Idaho Section)',
    lat: 44.4270, lon: -111.4000,
    countryId: 840,
    stateId: '16',
    color: '#4F7942',
    type: 'National Park',
    desc: 'Idaho, USA',
  },
  {
    name: 'Grand Canyon National Park',
    lat: 36.1069, lon: -112.1129,
    countryId: 840,
    stateId: '04',
    color: '#4F7942',
    type: 'National Park',
    desc: 'Arizona, USA',
  },
  {
    name: 'Madison, Wisconsin',
    lat: 43.0731, lon: -89.4012,
    countryId: 840,
    stateId: '55',
    color: '#C9A96E',
    type: 'City',
    desc: 'Wisconsin, USA',
  },
  {
    name: 'Chicago, Illinois',
    lat: 41.8781, lon: -87.6298,
    countryId: 840,
    stateId: '17',
    color: '#C9A96E',
    type: 'City',
    desc: 'Illinois, USA',
  },
  {
    name: 'Ann Arbor, Michigan',
    lat: 42.2808, lon: -83.7430,
    countryId: 840,
    stateId: '26',
    color: '#C9A96E',
    type: 'City',
    desc: 'Michigan, USA',
  },
  {
    name: 'West Lafayette, Indiana',
    lat: 40.4259, lon: -86.9081,
    countryId: 840,
    stateId: '18',
    color: '#C9A96E',
    type: 'City',
    desc: 'Indiana, USA',
  },
  {
    name: 'India Square, Jersey City',
    lat: 40.7307, lon: -74.0638,
    countryId: 840,
    stateId: '34',
    color: '#C9A96E',
    type: 'Neighborhood',
    desc: 'Jersey City, New Jersey, USA',
  },
  {
    name: 'Cleveland, Ohio',
    lat: 41.4993, lon: -81.6944,
    countryId: 840,
    stateId: '39',
    color: '#C9A96E',
    type: 'City',
    desc: 'Ohio, USA',
  },
  {
    name: 'Horseshoe Bend',
    lat: 36.8796, lon: -111.5104,
    countryId: 840,
    stateId: '04',
    color: '#4F7942',
    type: 'Natural Wonder',
    desc: 'Page, Arizona, USA',
  },
  {
    name: 'Antelope Canyon',
    lat: 36.8619, lon: -111.3743,
    countryId: 840,
    stateId: '04',
    color: '#4F7942',
    type: 'Natural Wonder',
    desc: 'Page, Arizona, USA',
  },
  {
    name: 'Tirupati, India',
    lat: 13.6288, lon: 79.4192,
    countryId: 356,
    color: '#C9A96E',
    type: 'City',
    desc: 'Andhra Pradesh, India',
  },


]
// ─────────────────────────────────────────────────────────────────────────────

const ALL_LOCATIONS = [...LOCATIONS, ...EXTRA_LOCATIONS]

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
