const View = {
  render({ minutes, seconds }) {
    document.body.innerHTML = `
        <p>Alerta Máximo</p>
        <span>${minutes}:${seconds}</span>  
        `;
  },
};

export { View };
