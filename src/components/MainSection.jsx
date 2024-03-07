import React from 'react'
import Block from './Block'

const MainSection = () => {

    const services = [{ title: 'web development', description: 'fast developed websites' },
    { title: 'web design', description: 'giving your website a good look' },
    { title: 'logo design', description: 'providing a good logo for your business' },
    { title: 'SEO', description: 'your website will come on the first page' },
    { title: 'Mobile app development', description: 'your business now comes on mobile' },
    { title: 'test automation', description: 'testing your projects' }]
    return (
        <div className='container' style={{ 'marginTop': '100px' }}>
            <h1 className='text-center'>Our services</h1>

            <div className="row">
                {services.map((e) => (
                    <div className="col-lg-4 col-md-4 col-sm-6 my-2" style={{ 'padding': '0px' }}>
                        <Block title={e.title} description={e.description} /></div>
                ))}
            </div>

        </div>
    )
}

export default MainSection
