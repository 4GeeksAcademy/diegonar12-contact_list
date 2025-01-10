import React from 'react'


const ContactCard = ({item}) => {
    return (
        <div className="card mb-3" key={item.id} style={{ width: '540px' }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="https://picsum.photos/170/170/" className="img-fluid rounded-circle p-3" alt="Aquí debería haber una foto :)" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <p className="card-text">{item.name}</p>
                        <p className="card-text">{item.address}</p>
                        <p className="card-text">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ContactCard
