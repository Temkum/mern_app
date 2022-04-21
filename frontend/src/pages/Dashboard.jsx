import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import GoalForm from '../components/GoalForm'
import Spinner from '../components/Spinner'
import { getGoals, reset } from '../features/goals/goalSlice'
import GoalItem from '../components/GoalItem'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const { user } = useSelector((state) => state.auth)
  const { goals, isLoading, isError, message } = useSelector((state) => state.goals)

  useEffect(() => {
    // check for error
    if (isError) {
      console.log(message)
    }
    if (!user) {
      navigate('/login')
    }

    // get goals from backend
    dispatch(getGoals())
  
    // reset state when we leave the dashboard
    return () => { dispatch(reset) }
    
    // dependencies
  }, [user, navigate, isError, message, dispatch])
  
  // spinners
  if (isLoading) {
    return <Spinner />    
  }


  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
      </section>

      <GoalForm />

      <section className="content">
        {goals.length > 0 ? (goals.map((goal) => (<GoalItem key={goal._id} goal={goal} />))) : (<h3>You have not set any goals</h3>)}
      </section>
    </>
  )
}

export default Dashboard