import Navbar from 'components/Navbar';
import ProjectList from 'components/Sidebar/ProjectList';
import TeamMembers from 'components/Sidebar/TeamMembers';
import TaskList from 'components/Task/TaskList';

function App() {
	return (
		<div className="text-[#111827]">
			<Navbar />
			<div className="container relative">
				<div className="sidebar">
					{/* <!-- Projects List --> */}
					<ProjectList />

					{/* <!-- Team Members --> */}
					<TeamMembers />
				</div>

				<div className="lg:pl-[16rem] 2xl:pl-[23rem]">
					<main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
						<div className="justify-between mb-10 space-y-2 md:flex md:space-y-0">
							<a href="./AddNew.html" className="lws-addnew group">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className="w-6 h-6 group-hover:text-indigo-500">
									<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
								</svg>

								<span className="group-hover:text-indigo-500">Add New</span>
							</a>
						</div>

						<TaskList />
					</main>
				</div>
			</div>
		</div>
	);
}

export default App;
