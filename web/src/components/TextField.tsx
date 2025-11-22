
type TextFieldProps = {
    label?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: 'text' | 'email' | 'password' | 'number';
    disabled?: boolean;
    width?: string;
    required?: boolean;
    error?: string;
    variant?: 'login' | 'signup';
    rightIcon?: React.ReactNode;
    rightButton?: {
        text: string;
        onClick: () => void;
    };
};

const TextField = ({
    label,
    value,
    onChange,
    placeholder,
    type = 'text',
    disabled,
    width,
    required,
    error,
    variant = 'login', 
    rightIcon,
    rightButton,
}: TextFieldProps) => {
    const variantStyle = {
        login: {
            wrapper: 'w-[300px]',
            input: 'h-[58px] px-[19px] py-[15px]',
            radius: 'rounded-[8px]',
            font: 'text-base',
            border: 'border-[#000000] border-opacity-40',
            placeholder: 'placeholder:text-[#33323699]',
        },
        signup: {
            wrapper: 'w-full',
            input: 'h-[36px] px-3 py-3',
            radius: 'rounded-[4px]',
            font: 'text-sm',
            border: 'border-black border-solid',
            placeholder: 'placeholder:text-[#8f8f8f]',
        },  
    };

    const style = variantStyle[variant];

    return (
        <div className={`flex flex-col ${width ?? style.wrapper}`}>
            {label && (
                <label className={`flex flex-start ${variant === 'signup' ? 'text-[15px] mb-[6px]' : 'text-lg mb-[10px]'} gap-[2px]`}>
                    {label}
                    {required && <span>*</span>}
                </label>
            )}
            {rightButton ? (
                <div className="flex gap-[6px]">
                    <div className={`flex items-center text-base border bg-white ${style.border} ${style.radius} ${style.input} flex-1`}>
                        <input
                            type={type}
                            value={value}
                            onChange={onChange}
                            placeholder={placeholder}
                            disabled={disabled}
                            className={`flex-1 ${style.font} bg-transparent outline-none placeholder:${style.placeholder}`}
                        />
                        {rightIcon && <div className="w-[18px] h-[18px] px-12 py-12">{rightIcon}</div>}
                    </div>
                    <button
                        onClick={rightButton.onClick}
                        className="bg-[#d9d9d9] border border-black border-solid h-[36px] px-[10px] py-[10px] text-[10px] text-black text-center whitespace-nowrap"
                    >
                        {rightButton.text}
                    </button>
                </div>
            ) : (
                <div className={`flex items-center text-base border bg-white ${style.border} ${style.radius} ${style.input}`}>
                    <input
                        type={type}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        disabled={disabled}
                        className={`flex-1 ${style.font} bg-transparent outline-none placeholder:${style.placeholder}`}
                    />
                    {rightIcon && <div className="w-[18px] h-[18px] px-12 py-12">{rightIcon}</div>}
                </div>
            )}
            {error && <span className="flex flex-start mt-[3px] text-[11px] text-[#838389]">{error}</span>}
        </div>
    );
};

export default TextField;
