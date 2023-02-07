const Contact = () => {
    return (
        <section id="contact">
            <div className="h1-bg">
                <h1 className="section-title">CONTACT ME</h1>
            </div>
            <form action="#">
                <h1 className="form-title">Send me a message</h1>
                <label for="name">Name</label>
                <input id="name" type="text" />
                <label for="email">E-mail</label>
                <input id="email" type="email" />
                <label for="subject">Subject</label>
                <input id="subject" type="text" />
                <label for="message">Message</label>
                <textarea name="message" id="" cols="30" rows="10"></textarea>
                <button type="submit">Send</button>
            </form>
        </section>
    )
}

export default Contact