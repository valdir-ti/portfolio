import React from 'react'

const Contact = () => {
  const [disabledButton, setDisabledButton] = React.useState(true)
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')

  React.useEffect(() => {
    if(name !== '' && email !== '' && message !== '') {
      setDisabledButton(false)
    }
  }, [name, email, message])

  return (
    <div id='contact' className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
        <form action="https://getform.io/f/a705874a-6f7e-476f-8daa-56edab313077" method="POST" className="flex flex-col max-w-[600px] w-full">
            <div className="pb-8">
                <p className="text-4xl inline font-bold border-b-4 border-pink-600 text-gray-300">Contact</p>
                <p className="text-gray-300 py-4">// Submit the form bellow or shoot me an email - valdir.ti@gmail.com</p>
            </div>
            <input className="bg-[#ccd6f6] p-2" type="text" placeholder="Name" name="name" autoComplete="off" value={name} onChange={(e) => setName(e.target.value)} />
            <input className="my-4 p-2 bg-[#ccd6f6]" type="email" placeholder="Email" name="email" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <textarea className="bg-[#ccd6f6] p-2" name="message" rows={10} cols={30} placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            <button disabled={disabledButton} className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact