interface InputProps {
  type: string;
  placeholder: string;
  label: string;
  id: string;
  value: string;
  onChange: () => void;
}

const Input = (props: InputProps) => {
  const { type, placeholder, label, id, value, onChange } = props;

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} value={value} onChange={onChange} />;
    </>
  );
};

export default Input;
