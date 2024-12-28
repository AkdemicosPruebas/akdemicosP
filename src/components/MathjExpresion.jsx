const MathExpression = ({ children }) => {
    return (
      <math xmlns="http://www.w3.org/1998/Math/MathML" display="inline-block">
        <mstyle mathsize="1.2em">{children}</mstyle>
      </math>
    );
  };
  export default MathExpression;
  