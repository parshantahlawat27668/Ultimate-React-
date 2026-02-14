import React from 'react'
import { useTodayActivity } from './useTodayActivity'
import Tag from '../../ui/Tag';
import TodayItem from './TodayItem';

const TodayActivity = () => {
    const {activities, isLoading} = useTodayActivity();

    if(isLoading) return <p>Loading...</p>
  return (
    <div className='col-span-2 bg-gray-800 rounded-lg px-2'>
      <h2 className='text-md  ml-4 pt-3 pb-1 mb-3'>Today</h2>
      {
        !isLoading 
        ? activities.length > 0 ? 
        <ul className='flex gap-3 flex-col'>
          {activities.map((activity)=><TodayItem activity={activity} key={activity.id}/>)}
        </ul>
        :<p>no activity</p>
        : <p>Loading...</p>
      }
    </div>
  )
}

export default TodayActivity
