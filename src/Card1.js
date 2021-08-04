export default function Card1() {
  const data = [
    {
      text: "EARNINGS (MONTHLY)",
      content: "$40,000",
      color: "primary"
    },
    {
      text: "EARNINGS (ANNUAL)",
      content: "$250,000",
      color: "success"
    },
    {
      text: "PENDING REQUESTS",
      content: "18",
      color: "warning"
    }
  ];
  return (
    <div className="row">
      {data.map((data, index) => {
        return (
          <div className="col-xl-3 col-md-6 mb-4">
            <div className={`card border-left-${data.color} shadow h-100 py-2`}>
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      {data.text}
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      {data.content}
                    </div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-calendar fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-info shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                  Tasks
                </div>
                <div className="row no-gutters align-items-center">
                  <div className="col-auto">
                    <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                      50%
                    </div>
                  </div>
                  <div className="col">
                    <div className="progress progress-sm mr-2">
                      <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        style={{ width: "50%" }}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-auto">
                <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
