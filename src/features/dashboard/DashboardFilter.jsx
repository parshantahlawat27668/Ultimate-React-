import React from 'react'
import Filter from '../../ui/Filter'

const DashboardFilter = () => {
  return (
    <Filter
    field="last"
    options={[
        {value:"7", label:"Last 7 Days"},
        {value:"30", label:"Last 30 Days"},
        {value:"90", label:"Last 90 Days"},
    ]}
    >

    </Filter>
  )
}

export default DashboardFilter
