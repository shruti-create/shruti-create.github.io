import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function EarthGlobe({ onClick }) {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    const w = 72
    const h = 72

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(w, h)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.domElement.style.cursor = 'pointer'
    renderer.domElement.addEventListener('click', onClick)
    mount.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100)
    camera.position.z = 2.8

    const geo = new THREE.SphereGeometry(1, 64, 64)
    const mat = new THREE.MeshPhongMaterial({
      color: 0x2266aa,
      emissive: 0x112244,
      shininess: 60,
    })
    const earth = new THREE.Mesh(geo, mat)
    scene.add(earth)

    const landColor = 0x2d8a4e
    const landDefs = [
      { lat: 40, lon: -100, sx: 0.38, sy: 0.22 }, 
      { lat: 55, lon: 15,   sx: 0.22, sy: 0.28 }, 
      { lat: 5,  lon: 25,   sx: 0.28, sy: 0.40 }, 
      { lat: 45, lon: 85,   sx: 0.45, sy: 0.30 }, 
      { lat: -25, lon: -55, sx: 0.20, sy: 0.28 }, 
      { lat: -25, lon: 135, sx: 0.18, sy: 0.16 }, 
    ]

    landDefs.forEach(({ lat, lon, sx, sy }) => {
      const lg = new THREE.SphereGeometry(1.005, 24, 24)
      const lm = new THREE.MeshPhongMaterial({ color: landColor, emissive: 0x0a3a1a })
      const patch = new THREE.Mesh(lg, lm)

      const phi = (90 - lat) * (Math.PI / 180)
      const theta = (lon + 180) * (Math.PI / 180)
      patch.scale.set(sx, sy, 0.08)
      patch.position.setFromSphericalCoords(1, phi, theta)
      patch.lookAt(0, 0, 0)
      earth.add(patch)
    })

    const atmGeo = new THREE.SphereGeometry(1.06, 64, 64)
    const atmMat = new THREE.MeshPhongMaterial({
      color: 0x4488ff,
      transparent: true,
      opacity: 0.10,
      side: THREE.FrontSide,
    })
    scene.add(new THREE.Mesh(atmGeo, atmMat))

    const sunLight = new THREE.DirectionalLight(0xffffff, 1.4)
    sunLight.position.set(5, 3, 5)
    scene.add(sunLight)
    scene.add(new THREE.AmbientLight(0x334466, 0.8))

    let animId
    const animate = () => {
      animId = requestAnimationFrame(animate)
      earth.rotation.y += 0.003
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      renderer.domElement.removeEventListener('click', onClick)
      renderer.dispose()
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
    }
  }, [onClick])

  return (
    <div
      ref={mountRef}
      onClick={onClick}
      style={{ width: 72, height: 72, cursor: 'pointer', borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}
    />
  )
}
