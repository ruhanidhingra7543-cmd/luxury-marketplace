import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SplashPage() {
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  // Auto-navigate to /home after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  // WebGL shader background animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    function syncSize() {
      const w = canvas.clientWidth || 1280;
      const h = canvas.clientHeight || 720;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    }

    let ro;
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(syncSize);
      ro.observe(canvas);
    }
    syncSize();

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;

    const vs = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

    const fs = `precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    float line1 = smoothstep(0.48, 0.5, abs(sin(uv.x * 40.0 + uv.y * 10.0 + u_time * 0.2)));
    float line2 = smoothstep(0.48, 0.5, abs(cos(uv.y * 40.0 - uv.x * 10.0 + u_time * 0.2)));
    vec3 color1 = vec3(0.96, 0.96, 0.86);
    vec3 color2 = vec3(0.0, 0.0, 0.5);
    vec3 finalColor = mix(color1, color2, (line1 * line2) * 0.05);
    gl_FragColor = vec4(finalColor, 1.0);
}`;

    function cs(type, src) {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    }

    const prog = gl.createProgram();
    gl.attachShader(prog, cs(gl.VERTEX_SHADER, vs));
    gl.attachShader(prog, cs(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    const pos = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uRes = gl.getUniformLocation(prog, 'u_resolution');

    let animId;
    function render(t) {
      syncSize();
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animId = requestAnimationFrame(render);
    }
    render(0);

    return () => {
      cancelAnimationFrame(animId);
      if (ro) ro.disconnect();
    };
  }, []);

  return (
    <div
      onClick={() => navigate('/home')}
      className="bg-background m-0 p-0 h-screen w-screen overflow-hidden flex items-center justify-center font-body-lg text-body-lg text-on-background relative cursor-pointer"
    >
      <style>{`
        .fade-scale-in {
          animation: fadeScaleIn 2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          opacity: 0;
          transform: scale(0.95);
        }
        @keyframes fadeScaleIn {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>

      {/* Background Shader */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-40" style={{ display: 'block' }}>
        <canvas
          ref={canvasRef}
          id="shader-canvas-ANIMATION_2"
          style={{ display: 'block', width: '100%', height: '100%' }}
        />
      </div>

      {/* Content Canvas */}
      <main className="relative z-10 flex flex-col items-center justify-center w-full h-full p-container-margin">
        <div className="fade-scale-in flex flex-col items-center justify-center space-y-gutter">
          <img
            alt="Artisanal Thread Logo"
            className="w-64 h-64 object-contain rounded-DEFAULT"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQ46oBM12OJlppdpYwQeIkfKdpHDoCXWS1zmNNP34RcaxcXk-ZO85y4SXF-0NMLqzt1JTRsYHH0uS6bQvccnHKFMuvmL1_Xtpz3f3VQsCjMsoA_knQEWqik1eUsN3OcZAsThJvuoip6j0SCoLtPGBOFUH_1IK5c1dnB5A8Kqap2-iF2QyICWQFw8ynW1X7o3ainJ5VhAjEgTKFgVn1rQPgAIiL7-mTlOb_3ON_GepcwohcuGvuzc1K3w"
          />
          <h1 className="font-display-lg text-display-lg text-primary tracking-widest uppercase md:font-display-lg md:text-display-lg font-headline-lg-mobile text-headline-lg-mobile">
            Artisanal Thread
          </h1>
          <p className="font-label-caps text-label-caps text-on-surface-variant opacity-70 tracking-[0.2em] uppercase mt-unit">
            Master Weavers
          </p>
        </div>
      </main>
    </div>
  );
}
