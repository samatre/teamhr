import React from "react";
import Emp from '../containers/Emp';

const EmpList = ({ empList }) => {
    return (
        <div>{
            empList.map((emp, i) => {
                return (
                    <Emp
                        key={emp.id}
                        id={emp.id}
                        name={emp.name}
                        roles={emp.roles}
                        isActive={emp.active}
                    />
                );
            })
        }
        </div>
    );
}

export default EmpList;