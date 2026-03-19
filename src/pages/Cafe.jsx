import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import * as THREE from 'three'

export default function Cafe() {
  const mountRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    while (mount.firstChild) mount.removeChild(mount.firstChild)

    const W = window.innerWidth
    const H = window.innerHeight

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(W, H)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x4a2200)

    renderer.useLegacyLights = true
    mount.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(58, W / H, 0.1, 100)
    camera.position.set(0, 3, 8)
    camera.lookAt(0, 1, 0)

    scene.add(new THREE.AmbientLight(0xffeedd, 0.9))
    const key = new THREE.DirectionalLight(0xfff8ee, 0.9)
    key.position.set(4, 8, 6)
    scene.add(key)
    const fill = new THREE.DirectionalLight(0xffddaa, 0.4)
    fill.position.set(-4, 4, 4)
    scene.add(fill)

    const mat  = c => new THREE.MeshLambertMaterial({ color: c })
    const bmat = c => new THREE.MeshBasicMaterial({ color: c })

    const box = (wx, wy, wz, color, x, y, z) => {
      const m = new THREE.Mesh(new THREE.BoxGeometry(wx, wy, wz), mat(color))
      m.position.set(x, y, z); scene.add(m); return m
    }
    const cyl = (rt, rb, h, color, x, y, z, seg = 12) => {
      const m = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), mat(color))
      m.position.set(x, y, z); scene.add(m); return m
    }
    const sph = (r, color, x, y, z, basic = false) => {
      const m = new THREE.Mesh(new THREE.SphereGeometry(r, 8, 8), basic ? bmat(color) : mat(color))
      m.position.set(x, y, z); scene.add(m); return m
    }

    box(16, 0.2,  16, 0xd49a5a, 0, -0.1,  0)   
    box(16, 8,   0.2, 0x7a4220, 0,  4,   -6)   
    box(0.2, 8,  16, 0x6b3810, -8, 4,    0)    
    box(0.2, 8,  16, 0x6b3810,  8, 4,    0)    
    box(16, 0.2, 16, 0x5a2e0e, 0,  8.1,  0)   

    box(3.2, 3.2, 0.15, 0x8a5a28,  0, 3.0, -5.93)
    const winGlass = new THREE.Mesh(new THREE.BoxGeometry(2.8, 2.8, 0.05), new THREE.MeshLambertMaterial({ color: 0xaaddff, transparent: true, opacity: 0.45 }))
    winGlass.position.set(0, 3.0, -5.9); scene.add(winGlass)
    const sky = new THREE.Mesh(new THREE.PlaneGeometry(2.8, 2.8), bmat(0x1a3a8a))
    sky.position.set(0, 3.0, -6.02); scene.add(sky)

    const wLight = new THREE.PointLight(0x88bbff, 0.5, 9)
    wLight.position.set(0, 3, -4); scene.add(wLight)

    const sc = document.createElement('canvas')
    sc.width = 512; sc.height = 144
    const ctx = sc.getContext('2d')
    ctx.fillStyle = '#2a0f00'; ctx.fillRect(0, 0, 512, 144)
    ctx.strokeStyle = '#ffd97d'; ctx.lineWidth = 5
    ctx.strokeRect(6, 6, 500, 132); ctx.strokeRect(12, 12, 488, 120)
    ctx.fillStyle = '#ffd97d'
    ctx.font = 'bold 72px Georgia, serif'
    ctx.textAlign = 'center'; ctx.fillText("Shruti's Café", 256, 97)
    const signMesh = new THREE.Mesh(new THREE.BoxGeometry(3.4, 0.96, 0.12), new THREE.MeshLambertMaterial({ map: new THREE.CanvasTexture(sc) }))
    signMesh.position.set(0, 5.5, -5.88); scene.add(signMesh)
    const sLight = new THREE.PointLight(0xffee88, 0.6, 4)
    sLight.position.set(0, 5.5, -4.6); scene.add(sLight)

    box(4.5, 1.1, 1.0, 0x8a4a12, -4, 0.55, -3.5)
    box(4.6, 0.13, 1.12, 0xc08050, -4, 1.17, -3.5)
    box(0.56, 0.62, 0.42, 0x333333, -5, 1.47, -3.5)
    box(0.36, 0.16, 0.28, 0x555555, -5, 1.79, -3.5)
    cyl(0.06, 0.06, 0.28, 0x222222, -4.82, 1.54, -3.38, 8)
    cyl(0.09, 0.08, 0.16, 0xf5f0e8, -3.35, 1.23, -3.5)
    cyl(0.09, 0.08, 0.16, 0xf5f0e8, -3.1,  1.23, -3.5)
    const cL = new THREE.PointLight(0xffcc66, 0.8, 6)
    cL.position.set(-4, 3.5, -3.5); scene.add(cL)

    box(2.5, 1.6, 0.09, 0x1e1e1e, 3.5, 2.9, -5.93)
    box(2.7, 1.8, 0.07, 0x8a5828, 3.5, 2.9, -5.97)

    const makeTable = (x, z) => {
      cyl(0.56, 0.56, 0.08, 0xb07040, x, 0.8, z, 32)
      cyl(0.045, 0.045, 0.74, 0x8a5828, x, 0.41, z)
      cyl(0.32, 0.32, 0.05, 0x8a5828, x, 0.025, z, 32)
    }
    const makeChair = (x, z, ry) => {
      const g = new THREE.Group()
      ;[[new THREE.BoxGeometry(0.42,0.06,0.42), [0,0,0]], [new THREE.BoxGeometry(0.42,0.45,0.06), [0,0.255,-0.18]]].forEach(([geo, pos]) => {
        const m = new THREE.Mesh(geo, mat(0x6a3000)); m.position.set(...pos); g.add(m)
      })
      ;[[-0.16,-0.16],[0.16,-0.16],[-0.16,0.16],[0.16,0.16]].forEach(([lx,lz]) => {
        const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.028,0.028,0.46), mat(0x8a4820))
        leg.position.set(lx,-0.26,lz); g.add(leg)
      })
      g.position.set(x,0.52,z); g.rotation.y=ry; scene.add(g)
    }
    makeTable(-1.8, 0.8); makeChair(-1.8,1.5,0); makeChair(-1.8,0.1,Math.PI); makeChair(-2.6,0.8,Math.PI/2); makeChair(-1.0,0.8,-Math.PI/2)
    makeTable( 1.8, 0.8); makeChair( 1.8,1.5,0); makeChair( 1.8,0.1,Math.PI); makeChair( 1.0,0.8,Math.PI/2); makeChair( 2.6,0.8,-Math.PI/2)
    makeTable( 3.2,-2.8); makeChair( 3.2,-2.1,0); makeChair( 3.2,-3.5,Math.PI)

    const pendant = (x, z) => {
      cyl(0, 0.22, 0.26, 0x222222, x, 4.8, z, 16)
      box(0.03, 1.1, 0.03, 0x333333, x, 5.45, z)
      const b = new THREE.Mesh(new THREE.SphereGeometry(0.08,8,8), bmat(0xfffaaa))
      b.position.set(x,4.64,z); scene.add(b)
      const pl = new THREE.PointLight(0xffcc55, 0.9, 7)
      pl.position.set(x, 4.5, z); scene.add(pl)
    }
    pendant(-1.8,0.8); pendant(1.8,0.8); pendant(3.2,-2.8)

    const plant = (x, z) => {
      cyl(0.16,0.13,0.3, 0xc07820, x, 0.15, z, 8)
      ;[[0,0.22,0],[-0.11,0.12,0.07],[0.11,0.12,-0.07],[0,0.1,-0.13]].forEach(([dx,dy,dz]) =>
        sph(0.14, 0x2d8a2d, x+dx, 0.38+dy, z+dz))
    }
    plant(-6.5,-4); plant(6.5,-4); plant(5,4.5)

    const flower = (x, y, z, petal) => {
      cyl(0.015,0.015,0.18, 0x2d8a2d, x, y+0.09, z, 6)
      for(let i=0;i<6;i++){const a=(i/6)*Math.PI*2; sph(0.042,petal, x+Math.cos(a)*0.065, y+0.21, z+Math.sin(a)*0.065)}
      sph(0.038, 0xffee33, x, y+0.21, z, true)
    }
    flower(-1.8,0.84,0.8, 0xff6688)
    flower( 1.8,0.84,0.8, 0xff9933)
    flower( 3.2,0.84,-2.8, 0xdd44cc)

    box(2.6,0.14,0.22, 0x8a5828, 0, 1.46, -5.88)
    flower(-0.65,1.52,-5.76, 0xff6688); flower(0,1.52,-5.76, 0xffffff)
    flower(0.65,1.52,-5.76, 0xff9933); flower(-1.1,1.52,-5.76, 0xdd44cc)
    flower(1.1,1.52,-5.76, 0xff6688)

    const fairyPalette = [0xfffaaa,0xffbbcc,0xaaffcc,0xaabbff,0xffddaa]
    const string = (x1,z1,x2,z2,y,n) => {
      for(let i=0;i<=n;i++){
        const t=i/n, x=x1+(x2-x1)*t, z=z1+(z2-z1)*t, fy=y-Math.sin(t*Math.PI)*0.28
        const c=fairyPalette[i%fairyPalette.length]
        const b=new THREE.Mesh(new THREE.SphereGeometry(0.036,5,5),bmat(c)); b.position.set(x,fy,z); scene.add(b)
        if(i%5===0){const fl=new THREE.PointLight(c,0.25,2.2); fl.position.set(x,fy,z); scene.add(fl)}
      }
    }
    string(-7,-5.5, 7,-5.5, 5.9,26); string(-7,-1.5, 7,-1.5, 5.9,26); string(-7,2.5, 7,2.5, 5.9,26)
    string(-7,-5.5,-7, 4.5, 5.9,18); string(7,-5.5,  7, 4.5, 5.9,18)
    string(-7,-5.5, 7, 4.5, 5.8,24); string(7,-5.5, -7, 4.5, 5.8,24)
    string(-7.5,-5.5,-7.5,4.5, 3.2,18); string(7.5,-5.5,7.5,4.5, 3.2,18)
    string(-1.6,-5.88,1.6,-5.88, 4.4,12)

    const skins  = [0xf1c27d,0xe0ac69,0xc68642,0x8d5524,0xffdbac,0xd4956a]
    const tops   = [0x3355aa,0xaa3333,0x228833,0x885522,0x553388,0xaa7722,0x226688,0xcc6644]
    const hairs  = [0x1a0a00,0x2a1500,0x0a0a0a,0x3b2200]

    const sitter = (x, z, ry, sk, sh, hr=0x1a0a00) => {
      const g = new THREE.Group()

      ;[[-0.065],[0.065]].forEach(([lx])=>{
        const th=new THREE.Mesh(new THREE.CylinderGeometry(0.055,0.05,0.28,6),mat(0x334466))
        th.rotation.x=Math.PI/2; th.position.set(lx,0.055,0.14); g.add(th)

        const sh2=new THREE.Mesh(new THREE.CylinderGeometry(0.042,0.038,0.28,6),mat(0x334466))
        sh2.position.set(lx,-0.085,0.28); g.add(sh2)

        const ft=new THREE.Mesh(new THREE.BoxGeometry(0.1,0.065,0.14),mat(0x222222))
        ft.position.set(lx,-0.085-0.14-0.0325,0.32); g.add(ft)
      })

      const to=new THREE.Mesh(new THREE.BoxGeometry(0.22,0.34,0.15),mat(sh)); to.position.set(0,0.225,0); g.add(to)

      ;[[-0.14],[0.14]].forEach(([ax])=>{
        const a=new THREE.Mesh(new THREE.CylinderGeometry(0.038,0.032,0.26,6),mat(sh))
        a.position.set(ax,0.34,0); a.rotation.z=ax<0?0.5:-0.5; g.add(a)
      })

      const hd=new THREE.Mesh(new THREE.SphereGeometry(0.115,8,8),mat(sk)); hd.position.set(0,0.54,0); g.add(hd)

      const hh=new THREE.Mesh(new THREE.SphereGeometry(0.132,8,8),mat(hr)); hh.scale.y=0.88; hh.position.set(0,0.545,0); g.add(hh)

      g.position.set(x,0.55,z); g.rotation.y=ry; scene.add(g)
    }

    const stander = (x, z, ry, sk, sh, hr=0x1a0a00) => {
      const g = new THREE.Group()

      ;[[-0.07],[0.07]].forEach(([lx])=>{
        const f=new THREE.Mesh(new THREE.BoxGeometry(0.1,0.07,0.18),mat(0x222222))
        f.position.set(lx,0.035,0.04); g.add(f)

        const shin=new THREE.Mesh(new THREE.CylinderGeometry(0.042,0.038,0.28,6),mat(0x334466))
        shin.position.set(lx,0.21,0); g.add(shin)

        const thigh=new THREE.Mesh(new THREE.CylinderGeometry(0.055,0.048,0.30,6),mat(0x334466))
        thigh.position.set(lx,0.50,0); g.add(thigh)
      })

      const to=new THREE.Mesh(new THREE.BoxGeometry(0.24,0.50,0.16),mat(sh)); to.position.set(0,0.90,0); g.add(to)

      ;[[-0.14],[0.14]].forEach(([ax])=>{
        const a=new THREE.Mesh(new THREE.CylinderGeometry(0.038,0.032,0.38,6),mat(sh))
        a.position.set(ax,1.02,0); a.rotation.z=ax<0?0.25:-0.25; g.add(a)
      })

      const hd=new THREE.Mesh(new THREE.SphereGeometry(0.115,8,8),mat(sk)); hd.position.set(0,1.285,0); g.add(hd)
      const hh=new THREE.Mesh(new THREE.SphereGeometry(0.132,8,8),mat(hr)); hh.scale.y=0.88; hh.position.set(0,1.29,0); g.add(hh)
      g.position.set(x,0,z); g.rotation.y=ry; scene.add(g)
    }

    sitter(-1.8,1.5,0,           skins[0],tops[0],hairs[0])
    sitter(-1.8,0.1,Math.PI,     skins[2],tops[1],hairs[2])
    sitter(-2.6,0.8,Math.PI/2,   skins[4],tops[2],hairs[1])
    sitter(-1.0,0.8,-Math.PI/2,  skins[1],tops[6],hairs[3])
    sitter( 1.8,1.5,0,           skins[3],tops[3],hairs[0])
    sitter( 1.8,0.1,Math.PI,     skins[0],tops[4],hairs[2])
    sitter( 2.6,0.8,-Math.PI/2,  skins[5],tops[7],hairs[1])
    sitter( 3.2,-2.1,0,          skins[2],tops[5],hairs[0])
    sitter( 3.2,-3.5,Math.PI,    skins[4],tops[0],hairs[2])
    stander(-4,  -3.1, 0.1,      skins[1],0xffffff,hairs[0])
    stander(-1.8,-2.2, 2.4,      skins[0],tops[2],hairs[3])
    stander(-2.8,-1.6, 1.7,      skins[3],tops[6],hairs[1])
    stander( 2.4,-4.2, 3.5,      skins[5],tops[1],hairs[2])
    stander(-1.0,-4.5, 2.8,      skins[2],tops[7],hairs[0])

    const uc = document.createElement('canvas')
    uc.width = 256; uc.height = 128
    const uctx = uc.getContext('2d')

    uctx.fillStyle = '#f59e0b'; uctx.fillRect(0,0,256,128)
    uctx.fillStyle = '#1a1a1a'
    for(let i=0;i<6;i++){ uctx.fillRect(i*44-8,0,22,128); uctx.save(); uctx.globalAlpha=0.18; uctx.restore() }

    uctx.save(); uctx.globalAlpha=0.22
    for(let i=-2;i<8;i++){
      uctx.fillStyle='#000'; uctx.beginPath()
      uctx.moveTo(i*40,0); uctx.lineTo(i*40+30,0); uctx.lineTo(i*40-70,128); uctx.lineTo(i*40-100,128)
      uctx.fill()
    }
    uctx.restore()

    uctx.strokeStyle='#ffffff'; uctx.lineWidth=6; uctx.strokeRect(3,3,250,122)

    uctx.fillStyle='#ffffff'
    uctx.font='bold 22px Arial, sans-serif'; uctx.textAlign='center'
    uctx.fillText('🚧 UNDER CONSTRUCTION 🚧', 128, 52)
    uctx.font='bold 16px Arial, sans-serif'
    uctx.fillText('check back soon!', 128, 82)
    uctx.font='13px Arial, sans-serif'
    uctx.fillText('— shruti', 128, 106)

    const ucSign = new THREE.Mesh(
      new THREE.BoxGeometry(2.2, 1.1, 0.06),
      new THREE.MeshLambertMaterial({ map: new THREE.CanvasTexture(uc) })
    )

    ucSign.position.set(-3.8, 2.6, -5.87)
    ucSign.rotation.y = 0
    scene.add(ucSign)

    let animId, t = 0
    const animate = () => {
      animId = requestAnimationFrame(animate)
      t += 0.005
      camera.position.x = Math.sin(t * 0.28) * 0.6
      camera.position.y = 3 + Math.sin(t * 0.18) * 0.08
      camera.lookAt(0, 1, 0)
      renderer.render(scene, camera)
    }
    animate()

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div style={{ position:'fixed', inset:0, zIndex:2000, background:'#4a2200' }}>
      <div ref={mountRef} style={{ width:'100vw', height:'100vh' }} />
      <div style={{ position:'absolute', top:'1.4rem', left:'1.4rem' }}>
        <button
          onClick={() => navigate('/')}
          style={{
            background:'rgba(0,0,0,0.55)', border:'1px solid rgba(255,200,100,0.4)',
            color:'#ffd97d', padding:'0.5rem 1.1rem', borderRadius:'6px',
            cursor:'pointer', fontSize:'0.85rem', fontFamily:'Inter, sans-serif', fontWeight:600,
          }}
        >
          ← Back
        </button>
        <div style={{ color:'rgba(255,210,120,0.6)', fontSize:'0.72rem', fontFamily:'Inter, sans-serif', marginTop:'0.3rem', paddingLeft:'0.2rem' }}>
          Shruti's Dream Café
        </div>
      </div>
    </div>
  )
}
