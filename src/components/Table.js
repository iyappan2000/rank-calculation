import React, { useState } from "react";
import { connect } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import "./Table.css";

function Table({ details, deleteDetails, addDetails }) {
  //   const details = useSelector();
  //   const details = [
  //     {
  //       id: 0,
  //       Name: "Santhosh",
  //       Tamil: 40,
  //       English: 35,
  //       Maths: 35,
  //       Science: 35,
  //       S_Science: 35,
  //       Total: 180,
  //       Rank: 3,
  //       Result: "Pass",
  //     },
  //     {
  //       id: 1,
  //       Name: "Saktheesh",
  //       Tamil: 35,
  //       English: 35,
  //       Maths: 35,
  //       Science: 35,
  //       S_Science: 34,
  //       Total: 174,
  //       Rank: "Nil",
  //       Result: "Fail",
  //     },
  //     {
  //       id: 2,
  //       Name: "Mahindran",
  //       Tamil: 50,
  //       English: 50,
  //       Maths: 50,
  //       Science: 50,
  //       S_Science: 50,
  //       Total: 250,
  //       Rank: 2,
  //       Result: "Pass",
  //     },
  //     {
  //       id: 3,
  //       Name: "Iyappan",
  //       Tamil: 90,
  //       English: 100,
  //       Maths: 100,
  //       Science: 100,
  //       S_Science: 100,
  //       Total: 490,
  //       Rank: 1,
  //       Result: "Pass",
  //     },
  //   ];
  const [Name, setName] = useState("");
  const [Tamil, setTamil] = useState();
  const [English, setEnglish] = useState();
  const [Maths, SetMaths] = useState();
  const [Science, setScience] = useState();
  const [SSS, setS_Science] = useState();
  const [Rank, setRank] = useState(null);
  const [Result, setResult] = useState("Fail");
  const [Total, setTotal] = useState(Tamil + English + Maths + Science + SSS);
  const totalValue = () => {
    setTotal(Tamil + English + Maths + Science + SSS);
  };

  var arrayRankTransform = (arr) => {
    const sorted = [...arr].sort((a, b) => b - a);
    return arr.map((x) => sorted.indexOf(x) + 1);
  };
  var Values = details.map((detail) => detail.Total);
  console.log(Values);
  const ranks = arrayRankTransform(Values);

  //   const value = Values.array.forEach((element) => {});
  //   console.log(value);
  const submitHandler = (e) => {
    e.preventDefault();
    // setTotal({
    //   total:
    //     parseInt(Tamil) +
    //     parseInt(English) +
    //     parseInt(Maths) +
    //     parseInt(Science) +
    //     parseInt(SSS),
    // });
    addDetails({
      Name,
      Tamil,
      English,
      Maths,
      Science,
      SSS,
      Total,
      Rank,
      Result,
    });
    for (const rank of ranks) {
      console.log(rank);
      setRank(rank);
    }
    // totalValue(Total);
    // var Values = details.map((detail) => detail.Total);
    // var arr = [Values];
    // var sorted = arr.slice().sort(function (a, b) {
    //   return b - a;
    // });
    // var ranks = arr.map(function (v) {
    //   return sorted.indexOf(v) + 1;
    // });

    setName("");
    setTamil("");
    SetMaths("");
    setEnglish("");
    setScience("");
    setS_Science("");

    totalValue();

    setResult(
      Tamil >= 35 && English >= 35 && Maths >= 35 && Science >= 35 && SSS >= 35
        ? "Pass"
        : "Fail"
    );
  };
  return (
    <div>
      <table class="table table-bordered table-responsive">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Name</th>
            <th scope="col">Tamil</th>
            <th scope="col">English</th>
            <th scope="col">Maths</th>
            <th scope="col">Science</th>
            <th scope="col">S.Science</th>
            <th scope="col">Total</th>
            <th scope="col">Rank</th>
            <th scope="col">Result</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail, id) => (
            <tr key={id}>
              <td>{id + 1}</td>
              <td>{detail.Name}</td>
              <td>{detail.Tamil}</td>
              <td>{detail.English}</td>
              <td>{detail.Maths}</td>
              <td>{detail.Science}</td>
              <td>{detail.SSS}</td>
              <td>{detail.Total}</td>
              <td>{detail.Rank}</td>
              <td>{detail.Result}</td>
              <td className="delIcon">
                <button
                  type="button"
                  onClick={() => deleteDetails(detail.id)}
                  style={{ border: "none" }}
                >
                  <AiFillDelete />
                </button>
              </td>{" "}
            </tr>
          ))}

          <tr>
            <td></td>
            <td>
              <input
                type="text"
                style={{ width: "80px" }}
                value={Name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </td>
            <td>
              {" "}
              <input
                type="number"
                style={{ width: "80px" }}
                value={Tamil}
                onChange={(e) => setTamil(+e.target.value)}
                required
              />
            </td>
            <td>
              {" "}
              <input
                type="number"
                style={{ width: "80px" }}
                value={English}
                onChange={(e) => setEnglish(+e.target.value)}
                required
              />
            </td>
            <td>
              {" "}
              <input
                type="number"
                style={{ width: "80px" }}
                value={Maths}
                onChange={(e) => SetMaths(+e.target.value)}
                required
              />
            </td>
            <td>
              {" "}
              <input
                type="number"
                style={{ width: "80px" }}
                value={Science}
                onChange={(e) => setScience(+e.target.value)}
                required
              />
            </td>
            <td>
              {" "}
              <input
                type="number"
                style={{ width: "80px" }}
                value={SSS}
                onChange={(e) => setS_Science(+e.target.value)}
                required
              />
            </td>
            <td>
              <input style={{ width: "80px" }} />
            </td>
            <td></td>
            <td></td>
            <td>
              <button onClick={submitHandler} style={{ border: "none" }}>
                Add
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <p style={{ color: "red", marginTop: "200px" }}>
        Total Value and ranking and result value also added in next line that is
        the error
      </p>
    </div>
  );
}
const mapStateToProps = (state) => ({
  details: state,
});

const mapDispatchToProps = (dispatch) => ({
  deleteDetails: (id) => {
    dispatch({ type: "DELETE_DETAILS", payload: id });
  },
  addDetails: (data) => {
    dispatch({ type: "ADD_DETAILS", payload: data });
  },
  totalValue: (a, total) => {
    dispatch({ type: "TOTAL", payload: total, a });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
