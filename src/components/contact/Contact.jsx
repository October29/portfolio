import React, { forwardRef } from 'react';

const Contact = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="contact" style={{ height: '700px', backgroundColor: '#c0c0c0', padding: '20px' }}>
      <h2>Contactame</h2>
      <p>Aquí va tu formulario o info de contacto...</p>
    </section>
  );
});

export default Contact;