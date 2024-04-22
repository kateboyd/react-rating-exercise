import image from './image.png'

const Testimonials = () => {
    const projects = [
        {name: 'Kate Boyd1', verification: 'verified1', details: 'this is my test1'}, 
        {name: 'Kate Boyd2', verification: 'verified2', details: 'this is my test2'},
        {name: 'Kate Boyd3', verification: 'verified3', details: 'this is my test3'}
    ]

    return (
<>
<div>
    {testimonials.map((testimonial, index) => {
        return (
            <div className="bg-fuchsia-950 text-white">
                <div className="flex">
                <img className="h-10" src={image} />            
                    <div>
                        <h2>{testimonial.name}</h2>
                        <h2>Verified Buyer</h2>
                    </div>
                </div>
                <p>"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"</p>
            </div>
        )
    })}
</div>
</>


    )
}

export default Testimonials

const ListOfProjects = () => {
    const projects = [{title: 'proj 1', desc: 'desc 1'}, {title: 'proj 2', desc: 'desc 2'}]

    return (
        <>
            <div>
                { projects.map((project, index) => {
                    return (
                        <div key={index}>
                            <h1>{project.title}</h1>
                            <p>{project.desc}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ListOfProjects