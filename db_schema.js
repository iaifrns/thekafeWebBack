export const users = [
    {
        name:'userName',
        type: 'varchar(255)'
    },
    {
        name:'userAddress',
        type: 'varchar(255)'
    },
    {
        name:'userEmail',
        type: 'varchar(255)'
    },
    {
        name:'user_image',
        type: 'varchar(255)'
    },
    {
        name:'usercountry',
        type: 'varchar(255)'
    },
    {
        name: 'usercity',
        type: 'varchar(255) unique'
    },
    {
        name:'userPassword',
        type: 'varchar(255)'
    },
    {
        name:'date_of_birth',
        type: 'DATE'
    }
]

export const jobs = [
    {
        name:'job_Name',
        type: 'varchar(255)'
    },
    {
        name:'job_description',
        type: 'varchar(255)'
    },
    {
        name:'job_type',
        type: 'varchar(255)'
    },
    {
        name:'job_image',
        type: 'varchar(255)'
    },
    {
        name:'status',
        type: 'boolean'
    },
    {
        name:'end_date',
        type: 'DATE'
    }
]

export const categories = [
    {
        name:'c_name',
        type: 'varchar(255)'
    },
    {
        name:'c_avatar',
        type: 'varchar(255)'
    },
    {
        name:'c_type',
        type: 'boolean'
    }
]

export const notifications = [
    {
        name:'text',
        type: 'varchar(255)'
    }
]

export const employees = [
    {
        name:'matricle',
        type: 'varchar(255)'
    },
    {
        name:'salary',
        type: 'varchar(255)'
    }
]

export const reviews = [
    {
        name:'comment',
        type: 'varchar(255)'
    }
]

export const role = [
    {
        name:'role_name',
        type: 'int'
    },
    {
        name:'description',
        type: 'int'
    }
]

export const companies = [
    {
        name:'com_Name',
        type: 'varchar(255)'
    },
    {
        name:'com_email',
        type: 'varchar(255)'
    },
    {
        name:'com_phone',
        type: 'varchar(255)'
    },
    {
        name:'com_address',
        type: 'varchar(255)'
    },
    {
        name:'zip_code',
        type: 'varchar(255)'
    },
    {
        name:'country',
        type: 'varchar(255)'
    },
    {
        name:'city',
        type: 'varchar(255)'
    },
    {
        name:'website',
        type: 'varchar(255)'
    },
    {
        name:'work_time',
        type: 'varchar(255)'
    },
    {
        name:'about',
        type: 'varchar(255)'
    },
    {
        name:'avatar',
        type: 'varchar(255)'
    },
    {
        name:'verified',
        type: 'boolean'
    },
    {
        name:'end_date',
        type: 'DATE'
    }
]

export const MODELS = [
    {
        name: "users",
        table: users
    },
    {
        name: "jobs",
        table: jobs
    },
    {
        name: "companies",
        table: companies
    },
    {
        name: "role",
        table: role
    },
    {
        name: "reviews",
        table: reviews
    },
    {
        name: "employees",
        table: employees
    },
    {
        name: "notifications",
        table: notifications
    },
    {
        name: "categories",
        table: categories
    }
]
