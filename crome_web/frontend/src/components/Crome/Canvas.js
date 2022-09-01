import React, {useRef, useEffect, useCallback} from 'react'
import img from "../../views/custom/robot1.png";
import Button from "../Elements/Button";

const Canvas = props => {

  let currentLine = 0
  let timer
  let boolInterval = false

  const canvasRef = useRef(null)

  const stopAnimationRobot = () => {
    clearInterval(timer)
    currentLine = 0
    boolInterval = false
    drawMap()
  }

  const startAnimationRobot = () => {
    if(!boolInterval) {
      boolInterval = true
      drawRobot()
      timer = setInterval(drawRobot, 1000)
    }
    else {
      boolInterval = false
      clearInterval(timer)
    }
  }

  const returnCaseSize = useCallback((context) => {
    const caseWidth = (context.canvas.width - 24) / props.world.size.width
    const caseHeight = (context.canvas.height - 24) / props.world.size.height
    let caseSize

    if (caseWidth < caseHeight) {
      caseSize = caseWidth
    } else {
      caseSize = caseHeight
    }

    return caseSize
  },[props.world])

  const drawMap = useCallback(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    context.clearRect(0,0,context.canvas.width,context.canvas.height)

    context.fillStyle = '#000000'
    context.fillRect(10, 20, context.canvas.width-20, context.canvas.height-20)
    context.fillStyle = '#FFFFFF'
    context.fillRect(12, 22, context.canvas.width - 24, context.canvas.height - 24)

    context.fillStyle = '#000000'
    context.textAlign = "center"
    context.textBaseline = "middle"
    context.fillText("Current line : "+(boolInterval?currentLine:"---"),context.canvas.width*4/5,10)

    let caseSize = returnCaseSize(context)

    let minX = 500
    let maxX = -1
    let minY = 500
    let maxY = -1

    for (let i = 0; i < props.world.grid.locations.length; i++) {
      context.fillStyle = props.world.grid.locations[i].color
      minX = 500
      maxX = -1
      minY = 500
      maxY = -1
      //draw grid
      for (let j = 0; j < props.world.grid.locations[i].coordinates.length; j++) {
        context.fillRect(props.world.grid.locations[i].coordinates[j].col * caseSize + 12,
            props.world.grid.locations[i].coordinates[j].row * caseSize + 22,
            caseSize, caseSize)
        if (props.world.grid.locations[i].coordinates[j].col < minX) {
          minX = props.world.grid.locations[i].coordinates[j].col
        }
        if (props.world.grid.locations[i].coordinates[j].col >= maxX) {
          maxX = props.world.grid.locations[i].coordinates[j].col + 1
        }
        if (props.world.grid.locations[i].coordinates[j].row < minY) {
          minY = props.world.grid.locations[i].coordinates[j].row
        }
        if (props.world.grid.locations[i].coordinates[j].row >= maxY) {
          maxY = props.world.grid.locations[i].coordinates[j].row + 1
        }
      }
      //draw name
      context.fillStyle = "#000000"
      context.textAlign = "center"
      context.textBaseline = "middle"
      context.fillText(props.world.grid.locations[i].id, ((maxX - minX) / 2 + minX) * caseSize + 12, ((maxY - minY) / 2 + minY) * caseSize + 22);
    }
  }, [props.world,returnCaseSize,currentLine,boolInterval]);

  const drawRobot = () => {
    if(currentLine >= props.lines.length) {
      stopAnimationRobot()
      return
    }
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    drawMap()
    const image = new Image();
    image.onload = function() {
      //find which location in concerned
      let arrayOutput = props.lines[currentLine][3].split(", ")
      let location
      for(let i=0 ; i<arrayOutput.length ; i++) {
        for(let j=0 ; j<props.world.grid.locations.length ; j++) {
          if(arrayOutput[i] === props.world.grid.locations[j].id) {
            location = j
          }
        }
      }

      //find where to draw the robot in the location
      let minX = 500
      let maxX = -1
      let minY = 500
      let maxY = -1
      for (let j = 0; j < props.world.grid.locations[location].coordinates.length; j++) {
        if (props.world.grid.locations[location].coordinates[j].col < minX) {
          minX = props.world.grid.locations[location].coordinates[j].col
        }
        if (props.world.grid.locations[location].coordinates[j].col >= maxX) {
          maxX = props.world.grid.locations[location].coordinates[j].col + 1
        }
        if (props.world.grid.locations[location].coordinates[j].row < minY) {
          minY = props.world.grid.locations[location].coordinates[j].row
        }
        if (props.world.grid.locations[location].coordinates[j].row >= maxY) {
          maxY = props.world.grid.locations[location].coordinates[j].row + 1
        }
      }
      //draw robot
      let caseSize = returnCaseSize(context)
      context.drawImage(image, ((maxX - minX) / 2 + minX) * caseSize + 12 -25, ((maxY - minY) / 2 + minY) * caseSize + 22 -25, 50, 50);

      currentLine++
    }
    image.src = img;
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    //Our first draw
    context.canvas.height = context.canvas.width

    drawMap()
  }, [props.world,drawMap])

  return (
      <>
        {
          props.lines.length !== 0 &&
          <div className="row my-2">
            <div className="col-2 offset-3">
              <Button
                  size="sm"
                  color="red"
                  onClick={() => {
                      stopAnimationRobot()
                  }}
              >
                <i className="fa-solid fa-rotate-right"></i>
              </Button>
            </div>
            <div className="col-2 offset-2">
              <Button
                  size="sm"
                  color="emerald"
                  onClick={() => {
                      startAnimationRobot()
                  }}
              >
                <i className="fa-solid fa-play inline mr-1"></i>
                <i className="fa-solid fa-pause inline"></i>
              </Button>
            </div>
          </div>
        }
        <canvas ref={canvasRef}/>
      </>
  )
}

export default Canvas