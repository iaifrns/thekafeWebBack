import { userRoute } from './users.js'
import {jobRoute} from './jobs.js'
import { reviewRoute } from './reviews.js'
import { employeeRoute } from './employee.js'
import {companyRoute} from './company.js'
import {roleRoute} from './role.js'
import {notificationRoute} from './notification.js'
import {categoryRoute} from './category.js'

export const ROUTES = {
    users: userRoute,
    job: jobRoute,
    employee:employeeRoute,
    review:reviewRoute,
    company:companyRoute,
    role:roleRoute,
    notification:notificationRoute,
    category:categoryRoute
    
}