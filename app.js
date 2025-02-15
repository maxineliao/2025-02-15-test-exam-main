function App() {
	const [data, setData] = React.useState([]);
	const getData = async () => {
		try {
			const res = await axios.get(
				"https://randomuser.me/api/?results=10"
			);
			setData(res.data.results);
		} catch (error) {
			console.log(error);
		}
	};
	React.useEffect(() => {
		getData();
	}, []);
	return (
		<div className="container mx-auto p-4">
			<div className="row">
				{data.map((item) => {
					return (
						<div className="col-md-4" key={item.id.value}>
							<div className="bg-light p-3">
								<img
									src={item.picture.large}
									alt="頭像"
									className="img-fluid rounded-circle"
								/>
								<h2 className="mb-0">{item.name.first} {item.name.last}</h2>
								<p className="mb-0">{item.email}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
