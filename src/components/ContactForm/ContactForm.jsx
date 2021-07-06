import React from "react";
import PropTypes from "prop-types";
import {IoPersonAddOutline} from "react-icons/io5"
import { Formik } from "formik";
import { Form, Label, Input, Button } from "./ContactForm.styled";

export default function ContactForm({onSubmit}) {
  return (
    <Formik
       initialValues={{ name: '', number: '' }}
       validate={values => {
         const errors = {};
         if (!values.name) {
           errors.name = "Обязательное поле";
         } else if (!values.number) {
           errors.number = "Обязательное поле";
         } else if (
           !/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i.test(values.name)
         ) {
           errors.name = 'Имя может состоять только из букв, апострофа, тире и пробелов.';
         } else if (
           !/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i.test(values.number)
         ) {
           errors.number = 'Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting, resetForm }) => {
         
        onSubmit(values);
         setSubmitting(false);
         resetForm();
         
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleSubmit,
         isSubmitting,
       }) => (
        <Form onSubmit={handleSubmit}>
          <Label> Name
           <Input
             type="text"
             name="name"
             onChange={handleChange}
             value={values.name}
            />
          </Label>
          {errors.name && touched.name && errors.name}
          <Label> Number
           <Input
             type="tel"
             name="number"
             onChange={handleChange}
             value={values.number}
            />
            </Label>
           {errors.number && touched.number && errors.number}
          <Button type="submit" disabled={isSubmitting}>
            <IoPersonAddOutline /> 
            Add contact
           </Button>
         </Form>
       )}
     </Formik>
  )
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func,
}

// import PropTypes from "prop-types";

// import { Button } from "./ContactForm.styled";

// class ContactForm extends Component {
//     state = {
//       name: "",
//       number: "",
//   }
  
//   handleChange = (e) => {
//     const {name, value} = e.currentTarget;
//     this.setState({ [name]: value });
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();

//     this.props.onSubmit(this.state);

//     this.setState({ name: "", number: ""});
//   }
  

//     render() {
//       const { name, number } = this.state;
      
//       return (
//           <form onSubmit={this.handleSubmit}>
//           <label>Name
//             <input onChange={this.handleChange}
//               type="text"
//               name="name"
//               value={name}
//               />
//             </label>
          
//           <label>Number
//             <input onChange={this.handleChange}
//               type="tel"
//               name="number"
//               value={number} />
//             </label>
          
//             <button type="submit">Add contact</button>
//         </form>
//       )
//     }
// }

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func,
// }

// export default ContactForm;
