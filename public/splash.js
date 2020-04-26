const particlesJSON = {
    "particles": {
        "size": {
            "value": 60,
            "random": true
          },
          "color": { // The color for every node, not the connecting lines.
            "value": "#B6A052" // Or use an array of colors like ["#9b0000", "#001378", "#0b521f"]
          },
        "line_linked": {
            "enable": false
        },
        "move": {
            "speed": 5
        }
    }
}

particlesJS("particles-js", particlesJSON)