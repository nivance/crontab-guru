import { genPageMetadata } from 'app/seo'
import exampleLinks from '@/data/exampleLinks'
import Link from 'next/link'

export const metadata = genPageMetadata({ title: 'Cron Examples' })

export default function Projects() {
    return (
        <>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
                <div className="space-y-2 pb-8 pt-6 md:space-y-5">
                    <h1 className="text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                        Cron Examples
                    </h1>
                    <h2 className="text-center text-xl leading-7 text-gray-900 dark:text-gray-100">
                        How to write a crontab schedule expression for
                    </h2>
                </div>
                <div className="container">
                    <table className="table-auto mx-auto px-14">
                        <thead>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            {exampleLinks.map((example) => (
                                <tr>
                                    <td>* <Link href={example.href} className='underline'>{example.title}</Link></td>
                                    <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                    <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                                    <td>* <Link href={example.href1} className='underline'>{example.title1}</Link></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
