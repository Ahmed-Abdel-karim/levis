import React from 'react';
import { InputGroup, Form, FormControl } from 'react-bootstrap';
import BaseIcon from '../baseIcon/BaseIcon';
import './input-addon.scss';

const InputAddon = ({ icon, placeholder, btnClass, inputClass, iconProps = {} }) => {
    return (
        <Form inline>
            <InputGroup className="mb-3" className={inputClass}  >
                <FormControl
                    placeholder={placeholder}
                />
                <InputGroup.Append>
                    <button className={`btn-addon ${btnClass}`}>
                        <BaseIcon icon={icon} color="primary" size="sm" {...iconProps} />
                    </button>
                </InputGroup.Append>
            </InputGroup>
        </Form>
    )
}

export default InputAddon