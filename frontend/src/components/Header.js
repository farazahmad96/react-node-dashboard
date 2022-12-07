import React from 'react';
import Modal from './Modal';

export default function Header() {

    return (
        <>
            <div className='main_header flex mb-4'>

                <div className='w-1/2 h-12 create_team_btn'>
                    User Admin
                    <Modal />

                </div>
                <div className='w-1/2 h-12'>
                    <h2 className='text-right'> <i className='fa fa-user fa-xl'></i>
                    </h2>
                </div>
            </div>
        </>
    )
}
