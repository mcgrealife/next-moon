/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '10': 'repeat(10, 10%)'
      },
      gridTemplateRows: {
        '10': 'repeat(10, 10%)'
      },
      keyframes: {
        'satellite': {
          '0%': {
            'transform': 'translateX(-50px) translateY(400px)'
          },
          '50%': {
            'transform': 'translateX(calc(50%)) translateY(300px)'
          },
          '100%': {
            'transform': 'translateX(calc(100% + 50px)) translateY(400px)'
          }
        },
        'rotateCurve': {
          '0%': {
            'transform': 'rotate(-15deg)'
          },
          '50%': {
            'transform': 'rotate(0deg)'
          },
          '100%': {
            'transform': 'rotate(15deg)'
          },
        },
        'laserBeam': {
          '0%': {
            'transform': 'translateX(-0%)  translateY(-100%) scaleY(0)'
          },
          '50%': {
            'transform': 'translateX(-50%)  translateY(0) scaleY(1)'
          },
          '100%': {
            'transform': 'translateX(-50%)  translateY(-100%) scaleY(0)'
          }
        }
        // 'satellite': {
        // LAGGY, USE TRANSFORM INSTEAD 
        //   '0%': {
        //     'left': '-50px',
        //     'top': '400px'
        //   },
        //   '50%': {
        //     'top': '400px'
        //   },
        //   '100%': {
        //     'left': 'calc(100% + 50px)',
        //     'top': '400px'
        //   }
        // }
      },
      animation: {
        'satellite': 'satellite 50s linear forwards infinite',
        'rotateCurve': 'rotateCurve 50s linear forwards infinite',
        // 'laserBeam': 'laserBeam 1s linear forwards [animation-delay:1s]'
        'laserBeam': 'laserBeam 1s linear forwards '
      }

    },
  },
  plugins: [],
}
