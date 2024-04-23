import { ComponentPropsWithoutRef, FormEvent, forwardRef, useImperativeHandle, useRef } from "react"

type FormProps = ComponentPropsWithoutRef<'form'> & {
    onSave: (value: unknown) => void;
}

export type FormHandle = {
    clear: () => void;
};

const Form = forwardRef<FormHandle, FormProps>(({ onSave, children, ...otherProps }, ref) => {

    const form = useRef<HTMLFormElement>(null);

    useImperativeHandle(ref, () => {
        return {
            clear() {
                form.current?.reset();
            }
        }
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        onSave(data);
    }

    return (
        <form onSubmit={handleSubmit} {...otherProps} ref={form}>
            {children}
        </form>
    )
});


export default Form;