
const { World, Engine, Runner, Render, Bodies, MouseConstraint, Mouse } = Matter
const width = window.innerWidth - 15; const height = window.innerHeight - 15

const engine = Engine.create()
const { world } = engine
const render = Render.create({
  element: document.body,         // element to create canvas in
  engine: engine,
  options: { width, height, wireframes: false}
})

Render.run(render)
Runner.run(Runner.create(), engine)

World.add(world, MouseConstraint.create(engine, {
  mouse: Mouse.create(render.canvas)
}))

const walls = [
  Bodies.rectangle(width / 2, 5, width, 10, { isStatic: true, render: {fillStyle: 'grey'} }),
  Bodies.rectangle(width / 2, height - 5, width, 10, { isStatic: true, render: {fillStyle: 'grey'} }),
  Bodies.rectangle(5, height / 2, 10, height, { isStatic: true, render: {fillStyle: 'grey'} }),
  Bodies.rectangle(width - 5, height / 2, 10, height, { isStatic: true, render: {fillStyle: 'grey'} })
]
World.add(world, walls)

for (let i = 0; i < 40; i++) {
  const random = Math.random()
  if (random < 0.3) {
    World.add(world, Bodies.rectangle(Math.random() * width, Math.random() * height, 40, 40))
  } else if (random < 0.7) {
    World.add(world, Bodies.circle(Math.random() * width, Math.random() * height, 20))
  } else {
    World.add(world, Bodies.polygon(Math.random() * width, Math.random() * height, 5, 35))
  }
}
