let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #fb4993;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #e06e43;">Estudiante de ingeniería biomédica con gusto por la programación.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
