import React from 'react';
import { BookOpen } from 'lucide-react';
import { useColorMode } from '@docusaurus/theme-common';
import TaskDurationBarChart from '../components/TaskDurationBarChart';
import LandingSectionWrapper from './LandingSectionWrapper';
import { Switch } from '@headlessui/react';
import classNames from 'classnames';

export default function FlowChart() {
	const [chart, setChart] = React.useState('short');
	const { colorMode } = useColorMode();

	return (
		<div className="flex flex-col w-full gap-4 justify-center items-start">
			<div className="flex flex-col gap-2 ">
				<div className="my-4 flex flex-row gap-2 items-center transition-all">
					<span className={classNames('font-light text-sm text-gray-900 dark:text-white')}>
						10 long running tasks
					</span>
					<Switch
						checked={chart === 'short'}
						title="Switch between short and long running tasks"
						onChange={() => {
							setChart(chart === 'long' ? 'short' : 'long');
						}}
						className={`${
							chart === 'short'
								? 'bg-emerald-500 dark:bg-emerald-900'
								: 'bg-gray-200 dark:bg-gray-800'
						}
          relative inline-flex h-[24px] w-[48px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
					>
						<span
							aria-hidden="true"
							className={`${chart === 'short' ? 'translate-x-6' : 'translate-x-0'}
            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white  shadow-lg ring-0 transition duration-200 ease-in-out`}
						/>
					</Switch>
					<span className={classNames('font-light text-sm text-gray-900 dark:text-white')}>
						40 lightweight tasks
					</span>
				</div>
			</div>
			<div
				className={classNames(
					colorMode === 'dark' ? 'bg-black' : 'bg-gray-50',
					'w-full p-8 bg-opacity-40 rounded-xl '
				)}
			>
				<div className="grid">
					{chart === 'short' ? (
						<div>
							<TaskDurationBarChart
								title="40 lightweight tasks (animation time speed x20)"
								xTitle="Duration (in seconds)"
								labels={[
									['Airflow'],
									['Prefect'],
									['Temporal'],
									['Windmill', 'Normal'],
									['Windmill', 'Dedicated Worker']
								]}
								rawData={[
									[
										[
											4.335, 3.959, 2.194, 2.192, 1.68, 1.965, 2.377, 2.259, 2.39, 2.6, 2.401,
											4.888, 5.118, 1.64, 2.396, 2.196, 2.488, 1.853, 1.513, 2.575, 2.218, 2.316,
											1.933, 2.176, 2.976, 5.192, 1.684, 2.361, 2.218, 1.409, 2.591, 2.192, 2.328,
											2.464, 2.88, 2.394, 2.046, 1.537, 4.988, 2.784
										],
										[
											0.417, 0.213, 0.203, 0.22, 0.209, 0.262, 0.205, 0.268, 0.209, 0.477, 0.322,
											0.817, 0.207, 0.253, 0.201, 0.226, 0.212, 0.199, 0.207, 0.435, 0.355, 0.408,
											0.431, 0.247, 0.461, 0.717, 0.237, 0.246, 0.194, 0.205, 0.421, 0.312, 0.421,
											0.25, 0.251, 0.206, 0.352, 0.21, 0.604, 0.223
										]
									],
									[
										[
											1.213, 0.064, 0.061, 0.059, 0.054, 0.053, 0.053, 0.054, 0.055, 0.056, 0.057,
											0.064, 0.052, 0.056, 0.056, 0.058, 0.052, 0.051, 0.054, 0.053, 0.053, 0.055,
											0.052, 0.054, 0.062, 0.051, 0.051, 0.052, 0.051, 0.048, 0.055, 0.057, 0.049,
											0.048, 0.055, 0.05, 0.051, 0.05, 0.053, 0.054
										],
										[
											0.044, 0.041, 0.04, 0.036, 0.035, 0.038, 0.037, 0.061, 0.039, 0.038, 0.04,
											0.038, 0.038, 0.041, 0.039, 0.043, 0.035, 0.035, 0.035, 0.038, 0.037, 0.036,
											0.036, 0.038, 0.039, 0.034, 0.035, 0.037, 0.034, 0.083, 0.035, 0.034, 0.033,
											0.034, 0.038, 0.034, 0.034, 0.035, 0.035, 0.034
										]
									],
									[
										[
											0.009, 0.028, 0.027, 0.029, 0.029, 0.029, 0.03, 0.03, 0.032, 0.028, 0.028,
											0.028, 0.029, 0.041, 0.029, 0.029, 0.077, 0.09, 0.091, 0.093, 0.092, 0.09,
											0.092, 0.091, 0.091, 0.091, 0.091, 0.09, 0.091, 0.093, 0.09, 0.093, 0.092,
											0.091, 0.09, 0.092, 0.091, 0.091, 0.091, 0.092
										],
										[
											0.007, 0.008, 0.008, 0.008, 0.007, 0.008, 0.008, 0.008, 0.008, 0.008, 0.008,
											0.008, 0.008, 0.008, 0.009, 0.009, 0.009, 0.009, 0.008, 0.008, 0.009, 0.008,
											0.009, 0.009, 0.009, 0.009, 0.009, 0.008, 0.009, 0.009, 0.008, 0.009, 0.009,
											0.009, 0.009, 0.009, 0.009, 0.009, 0.008, 0.008
										]
									],
									[
										[
											0.004, 0.063, 0.061, 0.062, 0.061, 0.061, 0.061, 0.061, 0.062, 0.062, 0.061,
											0.061, 0.065, 0.063, 0.06, 0.064, 0.062, 0.061, 0.062, 0.062, 0.06, 0.062,
											0.06, 0.062, 0.06, 0.063, 0.062, 0.061, 0.061, 0.06, 0.061, 0.06, 0.061,
											0.061, 0.061, 0.062, 0.06, 0.062, 0.06, 0.062
										],
										[
											0.048, 0.048, 0.048, 0.048, 0.047, 0.047, 0.047, 0.046, 0.05, 0.049, 0.047,
											0.047, 0.056, 0.052, 0.047, 0.045, 0.046, 0.047, 0.047, 0.05, 0.05, 0.047,
											0.046, 0.046, 0.046, 0.046, 0.046, 0.047, 0.046, 0.046, 0.047, 0.046, 0.046,
											0.046, 0.046, 0.048, 0.049, 0.049, 0.047, 0.048
										]
									],
									[
										[
											0.003, 0.06, 0.059, 0.06, 0.061, 0.061, 0.06, 0.059, 0.061, 0.061, 0.06, 0.06,
											0.061, 0.061, 0.062, 0.059, 0.06, 0.06, 0.06, 0.058, 0.06, 0.059, 0.06, 0.059,
											0.06, 0.059, 0.061, 0.061, 0.061, 0.06, 0.059, 0.061, 0.06, 0.06, 0.06, 0.06,
											0.059, 0.061, 0.061, 0.059
										],
										[
											0.002, 0.002, 0.002, 0.002, 0.002, 0.002, 0.002, 0.002, 0.002, 0.002, 0.002,
											0.002, 0.002, 0.002, 0.002, 0.002, 0.002, 0.002, 0.004, 0.002, 0.002, 0.002,
											0.002, 0.002, 0.002, 0.002, 0.002, 0.002, 0.002, 0.002, 0.002, 0.002, 0.002,
											0.002, 0.002, 0.003, 0.002, 0.002, 0.002, 0.002
										]
									]
								]}
								shouldAnimate={true}
							/>
						</div>
					) : (
						<TaskDurationBarChart
							title="10 long running tasks"
							labels={[
								['Airflow'],
								['Prefect'],
								['Temporal'],
								['Windmill', 'Normal'],
								['Windmill', 'Dedicated Worker']
							]}
							rawData={[
								[
									[4.347, 2.78, 1.975, 1.708, 1.832, 2.202, 2.641, 2.44, 2.179, 4.292],
									[2.564, 6.696, 1.715, 1.702, 2.144, 2.689, 2.503, 1.815, 1.954, 4.489]
								],
								[
									[1.27, 0.074, 0.062, 0.059, 0.063, 0.064, 0.058, 0.06, 0.062, 0.059],
									[1.359, 1.356, 1.354, 1.382, 1.358, 1.415, 1.379, 1.362, 1.333, 1.36]
								],
								[
									[0.012, 0.031, 0.032, 0.031, 0.032, 0.031, 0.033, 0.032, 0.034, 0.034],
									[1.345, 1.309, 1.305, 1.306, 1.307, 1.308, 1.305, 1.319, 1.313, 1.314]
								],
								[
									[0.004, 0.063, 0.065, 0.063, 0.063, 0.062, 0.062, 0.063, 0.062, 0.063],
									[0.785, 0.778, 0.821, 0.77, 0.767, 0.767, 0.782, 0.77, 0.772, 0.769]
								],
								[
									[0.004, 0.071, 0.062, 0.062, 0.067, 0.04, 0.03, 0.059, 0.063, 0.058],
									[0.734, 0.734, 0.729, 0.728, 0.754, 0.759, 0.732, 0.726, 0.728, 0.745]
								]
							]}
							shouldAnimate={true}
							xTitle="Duration (in seconds)"
						/>
					)}
				</div>
			</div>
			<div>
				<a
					type="button"
					target="_blank"
					href="/docs/misc/benchmarks/competitors"
					className={`text-sm flex flex-row items-center gap-2 text-emerald-500 !no-underline hover:text-emerald-700`}
				>
					See all benchmarks
					<BookOpen className=" h-4" />
				</a>
			</div>
		</div>
	);
}