import React from 'react'
import Block from './Block'
import Background from './Background'
import RandomQuote from './RandomQuote'

const MainSection = () => {

    const services = [{ title: 'web development', description: 'Crafting responsive and dynamic websites that resonate with your brand and engage your audience.', image:'https://miro.medium.com/v2/resize:fit:1200/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg' },
    { title: 'web design', description: 'Creating visually stunning websites with intuitive interfaces, reflecting the essence of your business.', image:'https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/01/104228210.jpg?auto=format&q=60&fit=max&w=930'},
    { title: 'logo design', description: 'Crafting unique and memorable logos that capture the essence of your brand and leave a lasting impression.', image: 'https://cdn2.hubspot.net/hubfs/2067553/Designing%20a%20Logo-2.jpg' },
    { title: 'SEO', description: 'Optimizing your online presence to enhance visibility and attract organic traffic, ensuring your business stands out in search engine results.', image:'https://d57439wlqx3vo.cloudfront.net/iblock/bc0/bc0f0fade6094e32d26afe9ee426bf47/a1d39b9944184055866844a5d88fdec3.png'},
    { title: 'Mobile app development', description: 'Building innovative mobile applications for iOS and Android platforms, ensuring seamless user experiences.', image:'https://externlabs.com/blogs/wp-content/uploads/2022/04/b2.jpg'},
    { title: 'test automation', description: 'Implementing automated testing solutions to streamline your development process, ensuring the reliability and scalability of your software products.', image:'https://www.testim.io/wp-content/uploads/2019/11/Automated-Testing.jpg' }]


    return (
        <>
        <Background heading="Project One" />
        <div className='container' style={{ 'marginTop': '100px' }}>
            <h1 className='text-center text-white'>Our services</h1>

            <div className="row">
                {services.map((e) => (
                    <div className="col-lg-4 col-md-4 col-sm-6 my-2 d-flex justify-content-center" style={{ 'padding': '0px' }}>
                        <Block title={e.title} description={e.description} image={e.image}/></div>
                ))}
            </div>

        </div>
        <RandomQuote/>
        </>
    )
}

export default MainSection