put on the scruipt in package json 
then npm run start it will run the start script now also remeber npm run start == npm start
for building project npm run build but its != npm build



now we see that creating react element fro createElement is very complex
also maing the hiercy is very hard and tricy
it like the directly creating html is better and easy

that's why FB developer create jsx
jsx is not a part of react
jsx is not html ,  in js
jsx is not html ,but  html or xml like syntax

is jsx valid Javascript?
no its not pure js it does not come with jsx inside it from core, js engine does not know jsx 
js engine understands escma script it does not know this jsx 
when we print this const jsxheading = <h1 id="heading" >Hello World By Aryan</h1>
it will be syntax error

so who is doing those things --> parcel 
offcourse parcel. when code is complied it is given to the parcel and parcel transpiled it before it reaches it js engine.
but the imp one to convert this jsx into tranpiled code is babel
it takes jsx and converts itto the code that js engine understands 

when we write jsx it will transnpiled it into the react.createElement

babel is not created by FB
babel do many things aswelll like its compiler converting fone file to another make it good for browser



okay in jsx if want want to write multiple lines then we should use ()

eg:
```js

const e = ( 
    <div>
        <h1>Hi There</h1>
    </div>
          )
```









