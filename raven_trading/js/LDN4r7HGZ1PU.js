import*as o from"three";import{GLTFLoader as T}from"three/addons/loaders/GLTFLoader.js";import{SVGLoader as P}from"three/addons/loaders/SVGLoader.js";import*as O from"three/addons/utils/BufferGeometryUtils.js";import I from"https://esm.sh/lenis@1.1.2";import{BloomEffect as U,EffectComposer as R,EffectPass as E,RenderPass as L,BlendFunction as M,VignetteEffect as N,VignetteTechnique as D,SMAAEffect as z,SMAAPreset as G,EdgeDetectionMode as A,PredicationMode as W}from"https://esm.sh/postprocessing@6.35.3";gsap.registerPlugin(ScrollTrigger),document.body.style.overscrollBehaviorY="none";const y=document.querySelector("#root"),S=y.dataset.resourceUrl||window.location.href,v={width:window.innerWidth,height:window.innerHeight};class V{constructor(t,i,e){this.scene=i,this.camera=e,this.composer=new R(t,{frameBufferType:o.HalfFloatType}),this.composer.addPass(new L(i,e)),this.createBloomEffect(),this.createVignetteEffect(),this.createSMAAEffect()}render(){this.composer.render()}createBloomEffect(){this.bloomEffect=new U({blendFunction:M.ADD,mipmapBlur:!0,luminanceThreshold:1,luminanceSmoothing:0,intensity:1.5,radius:.6}),this.bloomEffect.luminancePass.enabled=!0,this.bloomEffect.blendMode.setOpacity(1),this.bloomPass=new E(this.camera,this.bloomEffect),this.bloomPass.dithering=!0,this.composer.addPass(this.bloomPass)}createVignetteEffect(){this.vignetteOptions={offset:.476,darkness:.95,technique:D.DEFAULT,blendFunction:M.SET},this.vignetteEffect=new N(this.vignetteOptions);const t=new E(this.camera,this.vignetteEffect);this.composer.addPass(t)}createSMAAEffect(){const t={preset:G.HIGH,edgeDetectionMode:A.COLOR,predicationMode:W.DISABLED},i=new z(t),e=new E(this.camera,i);this.composer.addPass(e)}addPostGUI(t){const i=t.addFolder("PostProcessing");i.close();const e=i.addFolder("Bloom");{e.close();const s=this.bloomEffect.blendMode,u={intensity:this.bloomEffect.intensity,radius:this.bloomEffect.mipmapBlurPass.radius,luminance:{filter:this.bloomEffect.luminancePass.enabled,threshold:this.bloomEffect.luminanceMaterial.threshold,smoothing:this.bloomEffect.luminanceMaterial.smoothing},opacity:s.opacity.value,"blend mode":s.blendFunction};e.add(u,"intensity",0,10,.01).onChange(r=>{this.bloomEffect.intensity=Number(r)}),e.add(u,"radius",0,1,.001).onChange(r=>{this.bloomEffect.mipmapBlurPass.radius=Number(r)});let m=e.addFolder("Luminance");m.add(u.luminance,"threshold",0,1,.001).onChange(r=>{this.bloomEffect.luminanceMaterial.threshold=Number(r)}),m.add(u.luminance,"smoothing",0,1,.001).onChange(r=>{this.bloomEffect.luminanceMaterial.smoothing=Number(r)}),m.open(),e.add(u,"opacity",0,1,.01).onChange(r=>{s.opacity.value=r}),e.add(u,"blend mode",M).onChange(r=>{s.setBlendFunction(Number(r))}),e.add(this.bloomPass,"dithering").onChange(r=>{this.bloomPass.dithering=r})}const a=i.addFolder("Vignette");a.close(),a.add(this.vignetteOptions,"offset",0,1,.001).onChange(s=>{this.vignetteEffect.offset=Number(s)}),a.add(this.vignetteOptions,"darkness",0,1,.001).onChange(s=>{this.vignetteEffect.darkness=Number(s)}),a.add(this.vignetteOptions,"blendFunction",M).onChange(s=>{this.vignetteEffect.blendMode.blendFunction=Number(s)})}}class B{constructor(){this.maxPixelRatio=1.5,this.isMobile=window.innerWidth<768,this.settings={orbitControls:!1,fogColor:0,fogDensity:.03,uColor1:new o.Vector3(3.14,.92,.37),uColor2:new o.Vector3(2.8,.37,.01),uColor3:new o.Vector3(1.59,.92,.37)},this.UNIFORMS={uTime:{value:0},uPosition1:{value:new o.Vector2(.24,.56)},uPosition2:{value:new o.Vector2(-.426,.213)},uPosition3:{value:new o.Vector2(.238,-.106)},uPosition4:{value:new o.Vector2(-.647,-.401)},uPosition5:{value:new o.Vector2(.287,-.795)},uWaveScale:{value:1.1},uWaveSpeed:{value:.5},uWaveLength:{value:.5},uFadeDistance:{value:.329},uFadeSmoothness:{value:.176},uColor1:{value:this.settings.uColor1},uColor2:{value:this.settings.uColor2},uColor3:{value:this.settings.uColor3},fogNear:{value:15},fogFar:{value:20}},this.renderer=new o.WebGLRenderer({antialias:!1,alpha:!1,depth:!0}),y.appendChild(this.renderer.domElement),this.renderer.setSize(v.width,v.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,this.maxPixelRatio)),this.renderer.outputColorSpace=o.DisplayP3ColorSpace,this.renderer.toneMapping=o.AgXToneMapping,this.renderer.toneMappingExposure=1.2,this.canvas=this.renderer.domElement,this.canvas.style.position="fixed",this.canvas.style.top="0",this.canvas.style.left="0",this.canvas.style.width="100%",this.canvas.style.height="100vh",this.camera=new o.PerspectiveCamera(30,v.width/v.height,.1,2e3),this.scene=new o.Scene,this.fog=new o.Fog(this.settings.fogColor,15,20),this.scene.fog=this.fog,this.postManager=new V(this.renderer,this.scene,this.camera);const t=new o.Vector2;this.camera.getViewSize(this.camera.position.z,t),this.loadingManager=new o.LoadingManager,this.gltfLoader=new T(this.loadingManager),this.textureLoader=new o.TextureLoader(this.loadingManager),this.textures={}}init(){this.dirLight=new o.DirectionalLight("#5b3306",.6),this.dirLight.position.set(-2,4,-5.2),this.scene.add(this.dirLight),this.envMap,this.model,this.cameraTransforms=[],this.loadResources(),this.isMobile&&(this.lenis=new I({syncTouch:!0,smoothWheel:!0,touchMultiplier:1,touchInertiaMultiplier:10}),this.lenis.on("scroll",ScrollTrigger.update),gsap.ticker.lagSmoothing(0)),gsap.ticker.add(this.update.bind(this)),this.addEventListeners()}addEventListeners(){window.addEventListener("resize",this.resize.bind(this)),this.resize()}async loadResources(){const t=document.querySelector("#introVideo"),i=t.querySelector("video");i.autoplay=!1,i.loop=!1,t.style.display="block",this.loadTextures(),this.loadModels(),this.loadSVGs();let e,a={value:0},s="M0,0,C0,0,0.13,0.34,0.238,0.442,0.305,0.506,0.322,0.514,0.396,0.54,0.478,0.568,0.468,0.56,0.522,0.584,0.572,0.606,0.61,0.719,0.714,0.826,0.798,0.912,1,1,1,1",u=8,m;function r(){let w=Math.round(a.value);document.querySelector(".loader_progress_number").innerText=w+"%"}function g(){clearInterval(m),document.querySelector(".trigger").click()}function n(){let w=0;m=setInterval(function(){w=(w+1)%4;let C=".".repeat(w);document.querySelector(".loader_progress_text.is-ellipse").innerText=C},500)}e=gsap.timeline({paused:!0,onComplete:g}),n(),e.to(a,{value:100,onUpdate:r,duration:u,ease:CustomEase.create("custom",s)}),e.to(".loader_progress-bar",{width:"100%",duration:u,ease:CustomEase.create("custom",s)},0);let c=0,d=0;const f=1,h=gsap.fromTo(t,{opacity:1},{paused:!0,autoAlpha:0,duration:.8,ease:"none",onStart:()=>{introScramble.restart()},onComplete:()=>{document.querySelector(".loader")?.remove()}});let p={value:0};const _=gsap.quickTo(p,"value",{duration:2,ease:CustomEase.create("custom",s),onUpdate:()=>{e.progress(p.value),i.currentTime=0,p.value===1&&x()}});function x(){e.then(()=>{setTimeout(()=>{i.play(),setTimeout(()=>{h.play()},2200)},f*1e3)})}this.loadingManager.onProgress=function(w,C,b){d=C,c=b;const F=d/c;_(F)},this.loadingManager.onError=function(w){console.error("There was an error loading "+w)}}loadSVGs(){const t=new P(this.loadingManager),i=[`${S}/assets/ravenLogo.svg`,`${S}/assets/centralized_icon.svg`,`${S}/assets/decentralized_icon.svg`],e=new o.ShaderMaterial({uniforms:this.UNIFORMS,vertexShader:`
        // FOG
        #define USE_FOG true
        #include <common>
        #include <fog_pars_vertex>
        // FOG
        varying float vInstanceID;
        void main() {
          // FOG
          #include <begin_vertex>
          #include <project_vertex>
          #include <fog_vertex>
          // FOG
          vec4 finalPosition = vec4(position, 1.0);
          #ifdef USE_INSTANCING
            finalPosition = instanceMatrix * finalPosition;
            vInstanceID = float(gl_InstanceID);
          #endif
          gl_Position = projectionMatrix * viewMatrix * modelMatrix * finalPosition;
        }
      `,fragmentShader:`
        uniform vec3 uColor1;
        uniform float uTime;
        varying float vInstanceID;
        // FOG
        #define USE_FOG true
        #include <fog_pars_fragment>
        // FOG

        float getSineWave(float x, float frequency, float amplitude, float phase) {
          return sin(x * frequency + phase) * amplitude;
        }
        void main() {
          float amp = 0.3;
          float freq = 2.;
          float wave = getSineWave(uTime, freq, amp, vInstanceID * 0.10);
          wave = abs(wave);
          wave = 1. - wave;
          gl_FragColor = vec4(uColor1,1.);

          // FOG
          #include <fog_fragment>
          // FOG
        }
      `});let a=new o.BufferGeometry;i.forEach((s,u)=>{t.load(s,m=>{const r=m.paths,g=[];for(let n=0;n<r.length;n++){const c=r[n],d=P.createShapes(c);for(let f=0;f<d.length;f++){const h=d[f];g.push(new o.ShapeGeometry(h))}}if(a=O.mergeGeometries(g),a.center(),a.rotateX(Math.PI/2),a.rotateZ(Math.PI),s.includes("ravenLogo")){a.scale(.0016,.0016,.0016);const n=new o.Mesh(a,e);n.position.set(-6.36641,.639,-15.1066);const c=n.clone();c.position.set(11.0921,.59,-5.28589);const d=n.clone();d.position.set(-7.32533,.535374,22.5073),this.scene.add(n,c,d)}else if(s.includes("decentralized_icon")){a.scale(53e-5,53e-5,53e-5);const n=[[12.121687889099121,.22,12.2381010055542],[9.675174713134766,.22,12.669110298156738],[10.77871322631836,.22,13.00413990020752],[10.099039077758789,.22,13.472643852233887],[11.643181800842285,.22,13.36528491973877],[10.107261657714844,.22,12.022480964660645],[11.157635688781738,.22,12.25350284576416],[10.91347599029541,.22,11.52369213104248],[12.509175300598145,.22,13.02609920501709]];let c=0,d=0,f=0;const h=n.length;n.forEach(x=>{c+=x[0],d+=x[1],f+=x[2]});const p=new o.Vector3(c/h,d/h,f/h),_=new o.InstancedMesh(a,e,h);for(let x=0;x<h;x++)_.setMatrixAt(x,new o.Matrix4().makeTranslation(n[x][0]-p.x,n[x][1]-p.y,n[x][2]-p.z));_.position.set(p.x,p.y,p.z),this.scene.add(_)}else if(s.includes("centralized_icon")){a.scale(.0025,.0025,.0025);const n=new o.InstancedMesh(a,e,3),c=new o.Vector3(-7.94745,.378,3.41143),d=new o.Vector3(-6.17288,.378,4.38706),f=new o.Vector3(-6.15752,.378,2.54335),h=new o.Vector3((c.x+d.x+f.x)/3,(c.y+d.y+f.y)/3,(c.z+d.z+f.z)/3);for(let _=0;_<3;_++)n.setMatrixAt(_,new o.Matrix4().makeTranslation([c,d,f][_].x-h.x,[c,d,f][_].y-h.y,[c,d,f][_].z-h.z));n.position.set(h.x,h.y,h.z);const p=new o.Mesh(a,e);p.position.set(-4.17562,.532485,22.5415),this.scene.add(n,p)}})})}loadModels(){this.gltfLoader.load(`${S}/assets/models/raven_circuit_engraved_latest.glb`,t=>{this.model=t.scene;const i=Y(this.UNIFORMS,this.textures.squares),e=H(this.UNIFORMS,this.textures);this.model.traverse(s=>{if(s.name.startsWith("Camera")){const u=s.getWorldPosition(new o.Vector3),m=s.getWorldQuaternion(new o.Quaternion),r=new o.Euler().setFromQuaternion(m);this.cameraTransforms.push({position:u,quaternion:m,rotation:r})}s.isMesh&&(s.name.includes("GlowBox")||s.material.color.getHexString()==="f6fff6"?s.material=i:s.name==="Plane"?s.material=k(this.UNIFORMS,this.textures):s.material=e)}),this.scene.add(this.model);const a=this.cameraTransforms[0];gsap.set(this.camera.position,{x:a.position.x,y:a.position.y,z:a.position.z}),gsap.set(this.camera.rotation,{x:a.rotation.x,y:a.rotation.y,z:a.rotation.z}),$(this.camera,this.cameraTransforms,this.dirLight)})}loadTextures(){this.textures.squares=this.textureLoader.load(`${S}/assets/textures/squares.webp`),this.textures.squares.wrapS=this.textures.squares.wrapT=o.RepeatWrapping;const t=this.isMobile?`${S}/assets/textures/chip2.webp`:`${S}/assets/textures/chip2.webp`;this.textures.circuit=this.textureLoader.load(t),this.textures.circuit.flipY=!1,this.textures.normalTex=this.textureLoader.load(`${S}/assets/textures/plastic/512-black_plastic_normal.webp`),this.textures.ambientOcclusionTex=this.textureLoader.load(`${S}/assets/textures/plastic/1K-black_plastic_ambientocclusion.webp`),this.textures.roughnessTex=this.textureLoader.load(`${S}/assets/textures/plastic/1K-black_plastic_roughness.webp`),this.textures.normalTex.wrapS=this.textures.normalTex.wrapT=this.textures.ambientOcclusionTex.wrapS=this.textures.ambientOcclusionTex.wrapT=this.textures.roughnessTex.wrapS=this.textures.roughnessTex.wrapT=o.RepeatWrapping;const i=50;this.textures.normalTex.repeat.set(i,i),this.textures.ambientOcclusionTex.repeat.set(i,i),this.textures.roughnessTex.repeat.set(i,i)}update(t){this.lenis?.raf(t*1e3),this.UNIFORMS.uTime.value=t,this.postManager.render()}addGUI(){this.gui=new GUI,this.gui.domElement.style.position="fixed",this.gui.domElement.style.top="0",this.gui.domElement.style.left="0",this.gui.domElement.style.right="auto",this.gui.domElement.style.zIndex="10000",this.gui.close(),this.gui.addColor(this.settings,"fogColor").onChange(e=>{this.scene.fog.color.set(e),this.dirLight.color.set(e)}),this.gui.add(this.settings,"fogDensity",0,.1,.001).onChange(e=>{this.scene.fog.density=e});const t=this.gui.addFolder("GlowBox");t.close(),t.add(this.settings.uColor1,"x",0,9,.01).onChange(e=>{this.UNIFORMS.uColor1.value.x=e}).name("Color1 R"),t.add(this.settings.uColor1,"y",0,9,.01).onChange(e=>{this.UNIFORMS.uColor1.value.y=e}).name("Color1 G"),t.add(this.settings.uColor1,"z",0,9,.01).onChange(e=>{this.UNIFORMS.uColor1.value.z=e}).name("Color1 B"),t.add(this.settings.uColor2,"x",0,9,.01).onChange(e=>{this.UNIFORMS.uColor2.value.x=e}).name("Color2 R"),t.add(this.settings.uColor2,"y",0,9,.01).onChange(e=>{this.UNIFORMS.uColor2.value.y=e}).name("Color2 G"),t.add(this.settings.uColor2,"z",0,9,.01).onChange(e=>{this.UNIFORMS.uColor2.value.z=e}).name("Color2 B"),t.add(this.settings.uColor3,"x",0,9,.01).onChange(e=>{this.UNIFORMS.uColor3.value.x=e}).name("Color3 R"),t.add(this.settings.uColor3,"y",0,9,.01).onChange(e=>{this.UNIFORMS.uColor3.value.y=e}).name("Color3 G"),t.add(this.settings.uColor3,"z",0,9,.01).onChange(e=>{this.UNIFORMS.uColor3.value.z=e}).name("Color3 B");const i=this.gui.addFolder("Wave");i.close(),i.add(this.UNIFORMS.uPosition1.value,"x",-1,1,.001).name("Pos1 X"),i.add(this.UNIFORMS.uPosition1.value,"y",-1,1,.001).name("Pos1 Y"),i.add(this.UNIFORMS.uPosition2.value,"x",-1,1,.001).name("Pos2 X"),i.add(this.UNIFORMS.uPosition2.value,"y",-1,1,.001).name("Pos2 Y"),i.add(this.UNIFORMS.uPosition3.value,"x",-1,1,.001).name("Pos3 X"),i.add(this.UNIFORMS.uPosition3.value,"y",-1,1,.001).name("Pos3 Y"),i.add(this.UNIFORMS.uPosition4.value,"x",-1,1,.001).name("Pos4 X"),i.add(this.UNIFORMS.uPosition4.value,"y",-1,1,.001).name("Pos4 Y"),i.add(this.UNIFORMS.uPosition5.value,"x",-1,1,.001).name("Pos5 X"),i.add(this.UNIFORMS.uPosition5.value,"y",-1,1,.001).name("Pos5 Y"),i.add(this.UNIFORMS.uFadeDistance,"value",0,5,.001).name("Fade Distance"),i.add(this.UNIFORMS.uFadeSmoothness,"value",0,1,.001).name("Fade Smoothness"),i.add(this.UNIFORMS.uWaveSpeed,"value",0,2,.001).name("Speed"),i.add(this.UNIFORMS.uWaveLength,"value",0,1,.001).name("Length"),i.add(this.UNIFORMS.uWaveScale,"value",0,10,.1).name("Scale"),this.postManager.addPostGUI(this.gui)}resize(){v.width=window.innerWidth,v.height=window.innerHeight,this.maxPixelRatio=1.5,this.camera.aspect=v.width/v.height,v.width>768?this.camera.fov=30:this.camera.fov=40,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,this.maxPixelRatio)),this.renderer.setSize(v.width,v.height),this.postManager.composer.setSize(v.width,v.height)}}const q=new B;q.init();function k(l,t){const i=new o.MeshStandardMaterial({map:t.circuit,metalness:1,roughness:.3,emissive:16729088,emissiveMap:t.circuit,emissiveIntensity:4.5,bumpMap:t.circuit,bumpScale:20,normalMap:t.normalTex,normalScale:new o.Vector2(.5),aoMap:t.ambientOcclusionTex,aoMapIntensity:.5,roughnessMap:t.roughnessTex,flatShading:!0});return i.onBeforeCompile=e=>{e.uniforms={...e.uniforms,uTime:l.uTime,uPosition1:l.uPosition1,uPosition2:l.uPosition2,uPosition3:l.uPosition3,uPosition4:l.uPosition4,uPosition5:l.uPosition5,uWaveScale:l.uWaveScale,uWaveSpeed:l.uWaveSpeed,uWaveLength:l.uWaveLength,uFadeDistance:l.uFadeDistance,uFadeSmoothness:l.uFadeSmoothness},e.fragmentShader=`
		// ************ Custom Uniforms *******************
		uniform float uTime;
		uniform vec2 uPosition1;
		uniform vec2 uPosition2;
		uniform vec2 uPosition3;
		uniform vec2 uPosition4;
		uniform vec2 uPosition5;

		uniform float uWaveScale;
		uniform float uWaveSpeed;
		uniform float uWaveLength;
		uniform float uFadeDistance;
		uniform float uFadeSmoothness;
		// ************ Custom Uniforms *******************

		#define STANDARD
		#ifdef PHYSICAL
			#define IOR
			#define USE_SPECULAR
		#endif
		uniform vec3 diffuse;
		uniform vec3 emissive;
		uniform float roughness;
		uniform float metalness;
		uniform float opacity;
		#ifdef IOR
			uniform float ior;
		#endif
		#ifdef USE_SPECULAR
			uniform float specularIntensity;
			uniform vec3 specularColor;
			#ifdef USE_SPECULAR_COLORMAP
			uniform sampler2D specularColorMap;
			#endif
			#ifdef USE_SPECULAR_INTENSITYMAP
			uniform sampler2D specularIntensityMap;
			#endif
		#endif
		#ifdef USE_CLEARCOAT
			uniform float clearcoat;
			uniform float clearcoatRoughness;
		#endif
		#ifdef USE_IRIDESCENCE
			uniform float iridescence;
			uniform float iridescenceIOR;
			uniform float iridescenceThicknessMinimum;
			uniform float iridescenceThicknessMaximum;
		#endif
		#ifdef USE_SHEEN
			uniform vec3 sheenColor;
			uniform float sheenRoughness;
			#ifdef USE_SHEEN_COLORMAP
			uniform sampler2D sheenColorMap;
			#endif
			#ifdef USE_SHEEN_ROUGHNESSMAP
			uniform sampler2D sheenRoughnessMap;
			#endif
		#endif
		#ifdef USE_ANISOTROPY
			uniform vec2 anisotropyVector;
			#ifdef USE_ANISOTROPYMAP
			uniform sampler2D anisotropyMap;
			#endif
		#endif
		varying vec3 vViewPosition;
		#include <common>
		#include <packing>
		#include <dithering_pars_fragment>
		#include <color_pars_fragment>
		#include <uv_pars_fragment>
		#include <map_pars_fragment>
		#include <alphamap_pars_fragment>
		#include <alphatest_pars_fragment>
		#include <alphahash_pars_fragment>
		#include <aomap_pars_fragment>
		#include <lightmap_pars_fragment>
		#include <emissivemap_pars_fragment>
		#include <iridescence_fragment>
		#include <cube_uv_reflection_fragment>
		#include <envmap_common_pars_fragment>
		#include <envmap_physical_pars_fragment>
		#include <fog_pars_fragment>
		#include <lights_pars_begin>
		#include <normal_pars_fragment>
		#include <lights_physical_pars_fragment>
		#include <transmission_pars_fragment>
		#include <shadowmap_pars_fragment>
		#include <bumpmap_pars_fragment>
		#include <normalmap_pars_fragment>
		#include <clearcoat_pars_fragment>
		#include <iridescence_pars_fragment>
		#include <roughnessmap_pars_fragment>
		#include <metalnessmap_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>
		float createWave(vec2 _pos, vec2 vEmissiveMapUv) {
			vec2 uv = vEmissiveMapUv;
			uv = uv * 2. - 1.;
			uv += _pos;
			uv *= uWaveScale;

			// Make the distance field
			// float d = length(abs(uv));
			float d = length( max(abs(uv) - .05, 0.));

			// Visualize the distance field
			float wave = fract(d*10.0 - uTime *uWaveSpeed);
			wave = smoothstep(uWaveLength, 1.0, wave);

			// fade out the wave effect
			wave *= smoothstep(uFadeDistance+uFadeSmoothness,uFadeDistance, d);
			return wave;
		}
		void main() {
			vec4 diffuseColor = vec4( diffuse, opacity );
			#include <clipping_planes_fragment>
			ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
			vec3 totalEmissiveRadiance = emissive;
			#include <logdepthbuf_fragment>
			#include <map_fragment>
			#include <color_fragment>
			#include <alphamap_fragment>
			#include <alphatest_fragment>
			#include <alphahash_fragment>
			#include <roughnessmap_fragment>
			#include <metalnessmap_fragment>
			#include <normal_fragment_begin>
			#include <normal_fragment_maps>
			#include <clearcoat_normal_fragment_begin>
			#include <clearcoat_normal_fragment_maps>

			// ************** Custom <emissivemap_fragment> *******************
			#ifdef USE_EMISSIVEMAP
			vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
			float emissiveSelection = step(0.6,emissiveColor.r);
			emissiveColor.rgb = emissiveColor.rgb * emissiveSelection;

			// ******* wave effect ********
				float wave = 0.;
				wave += createWave(uPosition1, vEmissiveMapUv);
				wave += createWave(uPosition2, vEmissiveMapUv);
				wave += createWave(uPosition3, vEmissiveMapUv);
				wave += createWave(uPosition4, vEmissiveMapUv);
				wave += createWave(uPosition5, vEmissiveMapUv);

			// ******* wave effect ********

			totalEmissiveRadiance *= emissiveColor.rgb * wave;
			#endif
			// ************** Custom <emissivemap_fragment> *******************

			#include <lights_physical_fragment>
			#include <lights_fragment_begin>
			#include <lights_fragment_maps>
			#include <lights_fragment_end>
			#include <aomap_fragment>
			vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
			vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
			#include <transmission_fragment>
			vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
			#ifdef USE_SHEEN
			float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
			outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
			#endif
			#ifdef USE_CLEARCOAT
			float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
			vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
			outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
			#endif
			#include <opaque_fragment>
			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>
			#include <dithering_fragment>

			// gl_FragColor = vec4( mix(vec3(1.),vec3(0.),wave) ,1.);
		}
    `},i}function H(l,t){return new o.MeshStandardMaterial({color:11184810,metalness:1,roughness:.37,emissive:0,normalMap:t.normalTex,normalScale:new o.Vector2(.3),aoMap:t.ambientOcclusionTex,aoMapIntensity:.1,roughnessMap:t.roughnessTex})}function Y(l,t){return new o.ShaderMaterial({uniforms:{tex:{value:t},uColor1:l.uColor3,uColor2:l.uColor2,fogColor:{value:new o.Color(0)},fogNear:{value:15},fogFar:{value:20}},vertexShader:`
			uniform float uTime;
			varying vec2 vUv;
			// FOG
			#define USE_FOG true
			#include <common>
			#include <fog_pars_vertex>
			// FOG
			void main() {
				// FOG
				#include <begin_vertex>
				#include <project_vertex>
				#include <fog_vertex>
				// FOG
				vUv = uv;
				vec3 pos = position;
				gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
			}
		`,fragmentShader:`
			uniform sampler2D tex;
			uniform vec3 uColor1;
			uniform vec3 uColor2;

			varying vec2 vUv;

			// FOG
			#define USE_FOG true
			#include <fog_pars_fragment>
			// FOG

			void main() {
				vec4 tex = texture2D(tex, vUv);

				vec3 color = mix(uColor1, uColor2, tex.r);
				gl_FragColor = vec4(color, 1.0);
				// FOG
				#include <fog_fragment>
				// FOG
			}

		`})}function $(l,t,i){gsap.matchMedia().add({isMobile:"(max-width: 768px)",isDesktop:"(min-width: 769px)"},a=>{const{isDesktop:s}=a.conditions;if(s)gsap.utils.toArray(".section").forEach((u,m)=>{const r=gsap.timeline({defaults:{ease:"none"},scrollTrigger:{trigger:u,end:"top top",ease:"none",scrub:!0,id:`section-${m}`}}),g=t[m];r.to(l.position,{x:g.position.x,y:g.position.y,z:g.position.z},0),r.to(l.rotation,{x:g.rotation.x,y:g.rotation.y,z:g.rotation.z},"<"),r.to(i.position,{x:m%2===0?-2:2},"<")});else{const u=gsap.timeline({defaults:{ease:"power2.inOut"},scrollTrigger:{trigger:".tabs-trigger",scrub:1.5,start:"top bottom",end:"bottom bottom",id:"section"}}),m=[-1,1,-1,1,-2],r=[-1.5,1.5,-1.2,2,0],g=[1,1,1,1,0];t.forEach((n,c)=>{u.to(l.position,{x:n.position.x+r[c],y:n.position.y,z:n.position.z+g[c]}),u.to(l.rotation,{x:n.rotation.x,y:n.rotation.y,z:n.rotation.z},"<"),u.to(i.position,{x:m[c]},"<")})}})}