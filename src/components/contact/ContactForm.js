import { useForm } from '../../hooks/useForm';

const initialForm = {
  name: '',
  email: '',
  subject: '',
  comments: ''
};

const validateForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim('')) {
    errors.name = 'El campo "nombre" es requerido';
  } else if (!regexName.test(form.name.trim(''))) {
    errors.name = 'El campo "nombre" solo acepta letras y espacios en blanco';
  }

  if (!form.email.trim('')) {
    errors.email = 'El campo "email" es requerido';
  } else if (!regexEmail.test(form.email.trim(''))) {
    errors.email = 'El campo "email" es incorrecto';
  }

  if (!form.subject.trim('')) {
    errors.subject = 'El campo "asunto a tratar" es requerido';
  }

  if (!form.comments.trim('')) {
    errors.comments = 'El campo "comentarios" es requerido';
  } else if (!regexComments.test(form.comments.trim(''))) {
    errors.comments =
      'El campo "comentarios" no debe exceder los 255 caracteres';
  }

  return errors;
};

const ContacForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleBlur,
    handleSubmit,
    handleChange
  } = useForm(initialForm, validateForm);

  const style = {
    fontWeight: 'bold',
    color: '#dc3545'
  };

  return (
    <div>
      <h2>Formulario de Contacto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          value={form.name}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder='Escribe tu nombre'
          required
        />
        {errors.name && <p style={style}>{errors.name}</p>}
        <input
          type='email'
          name='email'
          value={form.email}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder='Escribe tu email'
          required
        />
        {errors.email && <p style={style}>{errors.email}</p>}
        <input
          type='text'
          name='subject'
          value={form.subject}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder='Asunto a tratar'
          required
        />
        {errors.subject && <p style={style}>{errors.subject}</p>}
        <textarea
          name='comments'
          cols='50'
          rows='5'
          value={form.comments}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder='Escribe tus comentarios'
          required
        ></textarea>
        {errors.comments && <p style={style}>{errors.comments}</p>}
        <input type='submit' value='Enviar' />
      </form>
    </div>
  );
};

export default ContacForm;
