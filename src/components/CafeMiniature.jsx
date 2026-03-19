import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import * as THREE from 'three'

export default function CafeMiniature({ size = 100 }) {
  const mountRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const mount = mountRef.current

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(size, size)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.domElement.style.cursor = 'pointer'
    renderer.domElement.style.display = 'block'

    const handleClick = () => navigate('/cafe')
    renderer.domElement.addEventListener('click', handleClick)
    mount.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100)
    camera.position.set(2.4, 1.7, 2.8)
    camera.lookAt(0, 0.5, 0)

    scene.add(new THREE.AmbientLight(0xfff0dd, 3.0))
    const dl = new THREE.DirectionalLight(0xffffff, 1.8)
    dl.position.set(4, 6, 4)
    scene.add(dl)

    const box = (wx, wy, wz, color, x, y, z) => {
      const m = new THREE.Mesh(new THREE.BoxGeometry(wx, wy, wz), new THREE.MeshLambertMaterial({ color }))
      m.position.set(x, y, z); scene.add(m); return m
    }
    const cyl = (rt, rb, h, color, x, y, z, seg = 8) => {
      const m = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), new THREE.MeshLambertMaterial({ color }))
      m.position.set(x, y, z); scene.add(m); return m
    }

    box(2.4, 0.06, 1.8, 0xc8a06a, 0, -0.03, 0.15)

    box(1.5, 1.1, 1.1, 0xf5e6c8, 0, 0.55, 0)

    box(1.7, 0.14, 1.3, 0x7a3010, 0, 1.12, 0)

    ;[-0.76, 0.76].forEach(x => {
      const tri = new THREE.Mesh(
        new THREE.ConeGeometry(0.38, 0.38, 3),
        new THREE.MeshLambertMaterial({ color: 0x6b2a0a })
      )
      tri.position.set(x, 1.38, 0)
      tri.rotation.y = Math.PI / 2
      scene.add(tri)
    })

    cyl(0.07, 0.07, 0.32, 0x8b5a2b, 0.3, 1.38, -0.15)
    cyl(0.1, 0.1, 0.04, 0x6b3a1a, 0.3, 1.55, -0.15)

    ;[0xffffff, 0x1a8a6a].forEach((c, i) => {
      const aw = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.08, 0.32), new THREE.MeshLambertMaterial({ color: c }))
      aw.position.set(-0.28 + i * 0.14, 0.76, 0.55)
      aw.rotation.x = -0.22
      scene.add(aw)
    })
    ;[0x1a8a6a, 0xffffff, 0x1a8a6a].forEach((c, i) => {
      const aw = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.08, 0.32), new THREE.MeshLambertMaterial({ color: c }))
      aw.position.set(0.0 + i * 0.14, 0.76, 0.55)
      aw.rotation.x = -0.22
      scene.add(aw)
    })

    box(0.3, 0.52, 0.06, 0x4a2200, 0, 0.26, 0.58)
    const knob = new THREE.Mesh(new THREE.SphereGeometry(0.03, 6, 6), new THREE.MeshLambertMaterial({ color: 0xddaa44 }))
    knob.position.set(0.1, 0.26, 0.615); scene.add(knob)

    ;[-0.46, 0.46].forEach(wx => {
      box(0.32, 0.3, 0.04, 0x5c3010, wx, 0.62, 0.59)
      const win = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.24, 0.04), new THREE.MeshLambertMaterial({ color: 0x88ccee, transparent: true, opacity: 0.75 }))
      win.position.set(wx, 0.62, 0.60); scene.add(win)
      box(0.28, 0.025, 0.04, 0x5c3010, wx, 0.62, 0.61)
      box(0.025, 0.26, 0.04, 0x5c3010, wx, 0.62, 0.61)
    })

    const sc = document.createElement('canvas')
    sc.width = 160; sc.height = 44
    const ctx = sc.getContext('2d')
    ctx.fillStyle = '#2a0f00'; ctx.fillRect(0, 0, 160, 44)
    ctx.strokeStyle = '#ffd97d'; ctx.lineWidth = 3; ctx.strokeRect(3, 3, 154, 38)
    ctx.fillStyle = '#ffd97d'
    ctx.font = 'bold 26px Georgia, serif'
    ctx.textAlign = 'center'; ctx.fillText("Shruti's Café", 80, 30)
    const signTex = new THREE.CanvasTexture(sc)
    const sign = new THREE.Mesh(new THREE.BoxGeometry(0.78, 0.22, 0.06), new THREE.MeshLambertMaterial({ map: signTex }))
    sign.position.set(0, 1.0, 0.58); scene.add(sign)

    ;[-0.56, 0.56].forEach(px => {
      cyl(0.09, 0.07, 0.16, 0xb06820, px, 0.08, 0.56)
      const leaves = new THREE.Mesh(new THREE.SphereGeometry(0.14, 8, 8), new THREE.MeshLambertMaterial({ color: 0x2d7a2d }))
      leaves.position.set(px, 0.28, 0.56); scene.add(leaves)
    })

    const flowerColors = [0xff6688, 0xffcc33]
    flowerColors.forEach((c, i) => {
      const x = i === 0 ? -0.56 : 0.56
      for (let j = 0; j < 4; j++) {
        const a = (j / 4) * Math.PI * 2
        const p = new THREE.Mesh(new THREE.SphereGeometry(0.025, 5, 5), new THREE.MeshLambertMaterial({ color: c }))
        p.position.set(x + Math.cos(a) * 0.055, 0.3, 0.56 + Math.sin(a) * 0.055); scene.add(p)
      }
      const center = new THREE.Mesh(new THREE.SphereGeometry(0.022, 5, 5), new THREE.MeshLambertMaterial({ color: 0xffee00 }))
      center.position.set(x, 0.3, 0.56); scene.add(center)
    })

    const fairyC = [0xfffaaa, 0xffbbcc, 0xaaffcc, 0xaabbff]
    for (let i = 0; i <= 14; i++) {
      const t = i / 14
      const fx = -0.75 + t * 1.5
      const fy = 1.16 + Math.sin(t * Math.PI) * -0.06
      const color = fairyC[i % fairyC.length]
      const b = new THREE.Mesh(new THREE.SphereGeometry(0.025, 5, 5), new THREE.MeshBasicMaterial({ color }))
      b.position.set(fx, fy, 0.66); scene.add(b)
    }

    let animId, t = 0
    const animate = () => {
      animId = requestAnimationFrame(animate)
      t += 0.006
      scene.rotation.y = Math.sin(t * 0.3) * 0.35
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      renderer.domElement.removeEventListener('click', handleClick)
      renderer.dispose()
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} style={{ width: size, height: size, cursor: 'pointer', flexShrink: 0 }} />
}
