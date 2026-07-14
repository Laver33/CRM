import * as motion from "motion/react-client"


const DashboardPage = () => {
    const testData = [
        {title: 'Доходы', data: 1},
        {title: 'Расходы', data: 1},
        {title: 'Прибыль', data: 1},
        {title: 'Разница', data: 1},
        {title: 'Записей', data: 1},
    ]


    return(
        <div>
            <div className="w-full flex gap-5">
                {testData.map(stats => (
                    <motion.div 
                        className="grid w-1/5 border border-[0.5px] md:col-auto gap-3 text-center shadow-xl/20 duration-1000 py-7 rounded-lg"
                        whileHover={{ scale: 1.03 }}
                    >
                        <h3 className="h-1/3">{stats.title}</h3>
                        <p className="h-2/3">{stats.data}</p>
                    </motion.div>
                ))}
            </div>


        
        </div>
    )
}

export default DashboardPage;