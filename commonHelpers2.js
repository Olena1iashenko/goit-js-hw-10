import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i}from"./assets/vendor-77e16229.js";const s=document.querySelector(".form");s.addEventListener("submit",m);function n(e,t){return new Promise((r,o)=>{setTimeout(()=>{e==="fulfilled"&&r({delay:t}),e==="rejected"&&o({delay:t})},t)})}function m(e){e.preventDefault();const t=Number(document.querySelector('input[name="delay"]').value),r=document.querySelector('input[name="state"]:checked').value;n(r,t).then(o=>i.show({message:`✅ Fulfilled promise in ${o.delay}ms`,messageColor:"white",backgroundColor:"green",position:"topRight"}),e.target.reset()).catch(o=>i.show({message:`❌ Rejected promise in ${o.delay}ms`,messageColor:"white",backgroundColor:"red",position:"topRight"}),e.target.reset())}
//# sourceMappingURL=commonHelpers2.js.map