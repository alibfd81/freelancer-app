import { Switch } from '@headlessui/react'
import { useState } from 'react'
import useToggleStatus from './useToggleProjectStatus'
import Loading from '../../ui/Loading'
function ToggleProjectsStatus({ project }) {
    const [enabled, setEnabled] = useState(project.status === "OPEN" ? true : false)
    const { isUpdating, toggleProject } = useToggleStatus()
    const toggleHandle = () => {
        console.log(enabled)
        console.log(project)
        const newStatus = project.status === "OPEN" ? "CLOSED" : "OPEN"
        toggleProject({
            id: project._id,
            data: { status: newStatus }
        }, {
            onSuccess: () => {
                setEnabled((prev) => !prev)
            }
        })
    }
    return (
        <div className='w-[5rem]'>
            {
                isUpdating ? <Loading /> : <Switch.Group>
                    <div className="flex items-center gap-x-2">
                        <Switch.Label>{project.status === "OPEN" ? "باز" : "بسته"}</Switch.Label>
                        <Switch
                            checked={enabled}
                            onChange={toggleHandle}
                            className={`${enabled ? 'bg-primary-900' : 'bg-secondary-200'
                                } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
                        >
                            <span
                                className={`${enabled ? '-translate-x-6' : '-translate-x-1'
                                    } inline-block h-4 w-4 transform rounded-full bg-secondary-0 transition-transform`}
                            />
                        </Switch>
                    </div>
                </Switch.Group>
            }
        </div>
    )
}

export default ToggleProjectsStatus
