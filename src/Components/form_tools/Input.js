import classNames from "classnames"
import { ErrorMessage, useField } from "formik"

export default function Input({label, ...props}){
    const [field,meta,helpers] = useField(props)
    
    return(
        <>
        <label className="block w-full">
                <div className="text-3xl text-gray-100 font-semibold text-center mb-6">{label}</div>
                <input  className={classNames({
                    "w-full h-10 border-b outline-none border-b-white bg-black text-white focus:border-b-white" :true,
                    "focus:border-black": !meta.error || !meta.touched,
                    "text-red-600":meta.error && meta.touched
                })} {...field}  {...props}/>
            </label>
        </>
    )
}