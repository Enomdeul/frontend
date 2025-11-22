import { textStyles } from '@/lib/typography';
import { AlertCircle, Check } from 'lucide-react';

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
    success?: string;
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
    success,
    variant = 'login', 
    rightIcon,
    rightButton,
}: TextFieldProps) => {
    const variantStyle = {
        login: {
            wrapper: 'w-[300px] sm:w-[320px] md:w-[340px]',
            input: 'h-[58px] sm:h-[62px] md:h-[66px] px-[19px] sm:px-5 md:px-6 py-[15px] sm:py-4 md:py-[17px]',
            radius: 'rounded-lg sm:rounded-xl md:rounded-2xl',
            border: 'border-[#000000] border-opacity-40',
            placeholder: 'placeholder:text-[#33323699]',
            labelMargin: 'mb-[10px] sm:mb-3 md:mb-4',
        },
        signup: {
            wrapper: 'w-full',
            input: 'h-12 sm:h-14 md:h-16 px-4 sm:px-5 md:px-6 py-4 sm:py-4 md:py-4',
            radius: 'rounded-xl sm:rounded-xl md:rounded-xl',
            border: 'border border-[#CFCFD7]',
            placeholder: 'placeholder:text-[#8f8f8f]',
            labelMargin: 'mb-1.5 sm:mb-2 md:mb-2.5',
        },  
    };

    const style = variantStyle[variant];
    const hasError = !!error;
    const hasSuccess = !!success;
    const borderColor = hasError 
        ? 'border border-[#FF4538]' 
        : hasSuccess 
        ? 'border border-[#08C481]' 
        : style.border;

    return (
        <div className={`flex flex-col ${width ?? style.wrapper}`}>
            {label && (
                <label className={`flex flex-start ${textStyles.body2.semibold} ${style.labelMargin} gap-0.5 sm:gap-1`}>
                    {label}
                    {required && <span className="text-red-500">*</span>}
                </label>
            )}
            {rightButton ? (
                <div className="flex gap-2.5 sm:gap-2.5 md:gap-2.5 items-center">
                    <div className={`flex items-center border bg-white ${borderColor} ${style.radius} ${style.input} flex-1`}>
                        <input
                            type={type}
                            value={value}
                            onChange={onChange}
                            placeholder={placeholder}
                            disabled={disabled}
                            className={`flex-1 ${textStyles.body2.medium} bg-transparent outline-none placeholder:${style.placeholder}`}
                        />
                        {hasError && (
                            <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                                <AlertCircle className="w-5 h-5 text-[#FF4538]" />
                            </div>
                        )}
                        {hasSuccess && !hasError && (
                            <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                                <Check className="w-5 h-5 text-[#08C481]" />
                            </div>
                        )}
                        {!hasError && !hasSuccess && rightIcon && <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">{rightIcon}</div>}
                    </div>
                    <button
                        onClick={rightButton.onClick}
                        className={`bg-[#EFEFF2] h-12 sm:h-14 md:h-16 px-4 sm:px-5 md:px-6 py-4 sm:py-4 md:py-4 ${textStyles.button.button2} text-[#63637e] text-center whitespace-nowrap rounded-xl sm:rounded-xl md:rounded-xl transition hover:opacity-80 flex items-center justify-center`}
                    >
                        {rightButton.text}
                    </button>
                </div>
            ) : (
                <div className={`flex items-center border bg-white ${borderColor} ${style.radius} ${style.input}`}>
                    <input
                        type={type}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        disabled={disabled}
                        className={`flex-1 ${textStyles.body2.medium} bg-transparent outline-none placeholder:${style.placeholder}`}
                    />
                    {hasError && (
                        <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                            <AlertCircle className="w-5 h-5 text-[#FF4538]" />
                        </div>
                    )}
                    {hasSuccess && !hasError && (
                        <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                            <Check className="w-5 h-5 text-[#08C481]" />
                        </div>
                    )}
                    {!hasError && !hasSuccess && rightIcon && <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0">{rightIcon}</div>}
                </div>
            )}
            {error && (
                <span className={`flex flex-start mt-2 text-[12px] ${textStyles.caption.medium} text-[#FF4538]`}>
                    {error}
                </span>
            )}
            {success && !error && (
                <span className={`flex flex-start mt-2 text-[12px] ${textStyles.caption.medium} text-[#08C481]`}>
                    {success}
                </span>
            )}
        </div>
    );
};

export default TextField;
