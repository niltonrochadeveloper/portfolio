"use client";
import { SubmitHandler, FormSubmitHandler, useForm } from "react-hook-form";
import { AiOutlineMail } from "react-icons/ai";

export interface FieldsProps {
  email: string;
}

const Contact = () => {
  const { handleSubmit, register } = useForm<FieldsProps, any>();

  const submit: SubmitHandler<FieldsProps> = async (data) => {
    console.log(data);
  };

  return (
    <div
      id="contact"
      className="container flex justify-center items-center w-full py-20 h-30 px-8 bg-background"
    >
      <div className="grid lg:grid-cols-3 grid-cols-1 w-full gap-4 max-w-[600px]">
        <div className="flex items-center justify-center text-white">
          <p>Entre em contato comigo por e-mail</p>
        </div>
        <div className="col-span-2">
          <form
            className="items-center flex w-full"
            onSubmit={() => handleSubmit(submit)}
          >
            <div className="relative border rounded-xl w-full overflow-clip flex items-center p-2 gap-2 bg-white">
              <AiOutlineMail className="text-slate-500" />
              <input
                className="w-full focus:outline-none"
                {...register("email")}
                type="email"
                placeholder="Digite seu email"
                name="email"
                id="email"
              />
              <button
                className="absolute right-0 border-l text-slate-500 bg-slate-50 rounded-r-xl w-20 h-full"
                type="submit"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
