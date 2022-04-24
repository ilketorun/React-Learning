// // import './Button.css';
// import styled from "styled-components";
import modules from "./Button.module.css";

// // this is a JavaScript syntax, not related with styled-components
// const Button = styled.button`
// //This is not Valid CSS code, CSS always needs a selector,
// // This code is a future of the styled-components
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (min-width: 768px) {
//     width: auto;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

// const Button = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={modules.button}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
