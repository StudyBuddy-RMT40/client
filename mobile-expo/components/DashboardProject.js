import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProjectCard = ({ name, status, description, goals, feedback, todos }) => {
  const navigation = useNavigation();

  let progress =
    (todos.filter((todo) => todo.isFinished).length / todos.length) * 100;

  let progressBarColor;
  if (progress <= 25) progressBarColor = "red";
  else if (progress <= 50) progressBarColor = "orange";
  else if (progress <= 75) progressBarColor = "yellow";
  else progressBarColor = "green";

  let displayText;
  if (status === "submitted") displayText = "Waiting For Buddy Approval";
  else if (status === "accepted") displayText = "Waiting For Payment";
  else if (status === "paid") displayText = "0% Complete";
  else if (
    status === "onProgress" ||
    status === "finished" ||
    status === "toReview"
  )
    displayText = `${progress}% Complete`;

  let cardContent = (
    <View>
      <Text style={styles.projectTitle}>{name}</Text>
      <View style={styles.progressBarContainer}>
        <View
          style={{
            ...styles.progressBarFill,
            width: `${progress}%`,
            backgroundColor: progressBarColor,
          }}
        ></View>
      </View>
      <Text style={styles.progressLabel}>{displayText}</Text>
    </View>
  );

  return (
    <TouchableHighlight
      onPress={() =>
        navigation.push("Detail", {
          project: {
            name,
            progress,
            status,
            description,
            goals,
            feedback,
            todos,
          },
        })
      }
      underlayColor="#f0f0f0"
      style={styles.projectCard}
    >
      {cardContent}
    </TouchableHighlight>
  );
};

const DashboardProject = ({ projectData }) => {
  const [activeFilter, setActiveFilter] = useState("On Progress");
  const [loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filterProjects = () => {
      if (!projectData) {
        setFilteredData([]);
        return;
      }

      const filteredProjects = projectData.filter((project) => {
        if (activeFilter === "Proposed") {
          return project.status === "submitted";
        } else if (activeFilter === "On Progress") {
          return project.status === "onProgress";
        } else if (activeFilter === "To Review") {
          return project.status === "toReview";
        } else {
          return project;
        }
      });

      setFilteredData(filteredProjects);
    };

    setLoading(true);
    filterProjects();
    setLoading(false);
  }, [activeFilter, projectData]);

  return (
    <View>
      <Text style={styles.yourProjectTitle}>My Projects</Text>

      <View style={styles.filterContainer}>
        <TouchableOpacity
          onPress={() => {
            setLoading(true);
            setActiveFilter("Proposed");
            setTimeout(() => setLoading(false), 500);
          }}
          style={[
            styles.filterButton,
            activeFilter === "Proposed" && styles.activeFilter,
          ]}
        >
          <Text style={styles.filterText}>Proposed</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setLoading(true);
            setActiveFilter("On Progress");
            setTimeout(() => setLoading(false), 500);
          }}
          style={[
            styles.filterButton,
            activeFilter === "On Progress" && styles.activeFilter,
          ]}
        >
          <Text style={styles.filterText}>On Progress</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setLoading(true);
            setActiveFilter("To Review");
            setTimeout(() => setLoading(false), 500);
          }}
          style={[
            styles.filterButton,
            activeFilter === "To Review" && styles.activeFilter,
          ]}
        >
          <Text style={styles.filterText}>To Review</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator
          size="large"
          color="#4781a5"
          style={{ marginTop: 20 }}
        />
      ) : (
        <>
          {filteredData.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
          {filteredData.length === 0 && (
            <Text style={styles.noProjectText}>No projects available.</Text>
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  yourProjectTitle: {
    fontSize: 24,
    marginTop: 15,
    marginLeft: 4,
    marginBottom: 10,
    fontFamily: "Lato-Bold",
  },
  projectCard: {
    borderRadius: 20,
    marginTop: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 15,
    backgroundColor: "white",
    marginBottom: 20,
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: "Lato-Bold",
  },
  progressLabel: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 12,
    fontFamily: "Lato-Regular",
  },
  progressBarContainer: {
    height: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
  progressBarFill: {
    height: 10,
    borderRadius: 10,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    borderRadius: 25,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "white",
    padding: 5,
  },
  filterText: {
    fontSize: 11,
    color: "#000",
  },
  filterButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  activeFilter: {
    backgroundColor: "#bddded",
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },
  noProjectText: {
    textAlign: "center",
    fontSize: 16,
    color: "#888",
    marginTop: 10,
  },
});

export default DashboardProject;
