import React from "react";
import { Link } from "react-router-dom";
import menu from "/menu-icon.png";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects">
      <div className="header-container">
        <h1 id="site-name">Italo Peralta</h1>
        <div className="flex">
          <a className="drop-down-menu container">
            <img className="menu-icon" src={menu} />
          </a>
          <ul className="dropdown">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/Glass"} className="nav-link">
                GLASS
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#vex">
                VEX
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#robotics">
                ROBOTICS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#UMASS">
                UMASSS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#RambollXCyrusOne">
                RAMBOLL
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Abaqus">
                ABAQUS
              </a>
            </li>
          </ul>
        </div>
      </div>
      <section className="left-pad" id="vex">
        <h2 className="project-title">Vex Robotics</h2>
        <h5>Mission Statement</h5>
        <hr></hr>
        <p>
          <img src="../project-pics/vex-goal.jpg" className="project-pic" />
          The purpose of the project is to provide a solution to world hunger
          which affects the population around the globe, particularly in
          developing countries. Since half of the habitable land on Earth is
          utilized for agriculture, a new method of agriculture is needed. As a
          result, NASA invested heavily on lunar agriculture, which can produce
          70% of Earth’s food supply. The moon’s slow rotation increases the
          crop’s exposure to sunlight. In order to have a greater control of
          sunlight exposure onto the plants, NASA has issued a request for
          proposal for a rover that is capable of locating and transporting
          crops while traversing through rough terrains of the moon.
        </p>
        <br />
        <h5 className="subtitle">Solution</h5>
        <hr />
        <div>
          <p>
            <img src="./vex-robot.jpg" className="project-pic" />
            The design of the lunar robot was created using Fusion 360, with all
            design changes recorded and explained. The robot required a unique
            mechanism to pick up and transport plant samples to designated drop
            sites, and it could not use prebuilt VEX claws or projectile designs
            like catapults or slingshots. The robot's footprint did not exceed
            15 x 15 inches. Materials provided for construction included VEX
            steel pieces, a basic electronic prototyping kit, sensors, and
            motors, with additional materials available upon request. The robot
            was built using VEX steel pieces, three 4-inch wheels, a 60-tooth
            gear, three wired motors, a 7.2V lithium battery, an Arduino UNO
            Board, a motor shield, screws, bolts, and a metal bar. The design
            adhered to size constraints of a maximum 15 x 15 inches, with an
            optimal size range of 12 x 12 inches and no height limitations. The
            robot featured a unique claw mechanism, known as "the lifting
            mechanism", which was our design. This claw was powered by a single
            motor connected via a gear for torque, allowing it to lift and carry
            objects easily regardless of weight or position.
            <br />
          </p>
        </div>
        <h5 className="subtitle">Result</h5>
        <hr />
        <div>
          <p>
            The project was completed with appropriate task distribution, team
            coordination, and engineering knowledge. The robot has been fully
            commissioned, picking up plants A and B and delivering them to the
            designated drop sites.
          </p>
        </div>
      </section>

      <section className="left-pad" id="robotics">
        <h2 className="project-title">Robotics Design Team</h2>
        <h6 className="details">NYU Vertically Integrated Projects Team</h6>
        <h6 className="details">September 2021 - january 2024</h6>

        <div className="mission-statement">
          <h5>Mission Statement</h5>
          <hr />
          <p>
            Members of the New York University Robotics Design Team (NYU RDT)
            are trained to become well-rounded participants in NASA’s Robotic
            Mining Competition (NASA RMC). This competition challenges us to
            apply our knowledge and skills from various disciplines to design,
            build, and operate a lunar excavator prototype capable of traversing
            extraterrestrial terrain, either through teleoperation or
            autonomously. At NYU RDT, we provide every recruit with
            opportunities to explore our various competencies, both hands-on and
            remotely, through the methodology of Systems Engineering as defined
            by NASA. This involves identifying and managing technical risks
            through the integration and coordination of diverse technical
            components and competencies. To ensure the functionality of our
            projects, we adhere to the scrum methodology for project management,
            a practice widely used across many industries and projects. This
            structured approach helps us maintain focus and efficiency in our
            diverse work environment. Beyond constructing robots, our team is
            dedicated to volunteering in the STEM community. We actively
            introduce robotics and engineering to traditionally underrepresented
            groups, fostering a passion for STEM fields among the next
            generation.
          </p>
        </div>
        <div className="contribution">
          <h5 className="subtitle">Contribution</h5>
          <hr />
          <p>
            2021-22 - Integration Member: CAD [Onshape], FEA Analysis [Ansys],
            Manufacturing [Woodworking, Sheet Metal, Laser Cutting, 3D Printing]
            <br />
            2022-23 - Mechanical Member: Manufacturing [Woodworking, Sheet
            Metal, Laser Cutting, 3D Printing]
            <br />
            2023-24 - Mentor: CAD + Manufacturing
            <br />
            <strong>
              Designs for the 2 years I was deeply involved. Rank Nationally Top{" "}
              <br />
              13 [2021-22]: In Engineering Paper and Design Rank Nationally Top{" "}
              <br />
              10 [2022-23]: In Engineering Paper and Design <br />
            </strong>
          </p>
        </div>
        <div className="container">
          <div>
            <h3 className="date">2021-22</h3>
            <img src="./project-pics/robot-1.jpg" className="project-pic" />
          </div>
          <div>
            <h3 className="date">2022-2023</h3>
            <img src="./robot.jpg" className="project-pic" />
          </div>
        </div>
        <div className="FEA">
          <h5 className="subtitle">FEA Analysis using Ansys</h5>
          <hr />
          <p>
            <img
              src="./project-pics/FEA.jpg"
              className="project-pic"
              id="FEA"
            />
            In the development of the lunar robot, performing an analysis on the
            chassis using ANSYS Finite Element Analysis (FEA) simulation is a
            crucial step to ensure its structural integrity and performance
            under extraterrestrial conditions. Here is a corner of the 2019
            robot, which I recreated to reflect a similar chassis design shown
            below and in the 2021-22 robot. I spearheaded the manufacturing of
            the designs and personally cut all the steel and aluminum for the
            chassis, before doing so I implemented the FEA Analysis and got a
            static structural test to ensure structural integrity to the design.
            <br />
          </p>
          <p>
            <div>
              <img
                src="./project-pics/FEA.jpg"
                className="project-pic"
                id="FEA"
              />
              <p>2021-2022 Robot Chassis Manufacturing </p>
            </div>
            In the development of the lunar robot, performing an analysis on the
            chassis using ANSYS Finite Element Analysis (FEA) simulation is a
            crucial step to ensure its structural integrity and performance
            under extraterrestrial conditions. Here is a corner of the 2019
            robot, which I recreated to reflect a similar chassis design shown
            below and in the 2021-22 robot.
            <br />
          </p>
        </div>
      </section>

      <section className="left-pad" id="UMASS">
        <h2 className="project-title">UMASS Lowell (NASA GLENN, AFRL,NSF)</h2>
        <h6 className="details">First Internship - Undergraduate Researcher</h6>
        <h6 className="details">Summer 2022</h6>
        <p className="minor-details">
          <strong>Quick Context: </strong> Only Undergraduate in a team of
          Graduate students*
        </p>
        <div className="mission-statement">
          <h5>Mission Statement</h5>
          <hr />
          <p className="column">
            The purpose of this research was to predict thermo-mechanical
            composite properties of bulk material during manufacturing using the
            finite element process modeling framework at the macroscale.
            Furthermore, another area of this research was to gather material
            property data for different resins to generate representative volume
            fibers (RVEs) and perform process modeling and virtual mechanical
            testing of polymer matrix composites at the microscale.
            <br />
            <br />
            General Methodology for Process Modeling
            <img
              id="methodology"
              className="col-pic"
              src="./project-pics/pipeline.png"
            />
            A database was created to gather all properties of composites,
            fibers and resins in order to generate RVEs. This will lead to
            calculating the properties of each as a function of cure. To create
            these RVEs we were given a strong recommendation to use Abaqus and
            model all of these RVEs and continue with the process modeling.
            Shown below is a flow chart on the script I created to make the
            process of RVEs a lot more efficient. of cure.
            <img src="./project-pics/flow-chart.png" className="row-pic" />
            r is for the radius of the fiber/inclusion, nf is for the number of
            fibers, and i is the number of models or iterations. r, nf, i are
            all inputted by the user. The size of the material/element is
            determined by the placement of the two points of the square which
            can be manually inputted or processed by the user in the Abaqus
            environment. It can also be done by special command and be inputted
            via script. The same concept applies to the inner radius. The inner
            boundary shown below is the boundary in which the fiber's center
            location as a (X, Y) coordinate cannot pass through. The (X, Y)
            coordinates are initially randomly generated via the Random Library
            in Python while keeping in mind the size of the element by the
            radius of the matrix/fiber being the delta and becoming the inner
            boundary where fibers are now generated.
            <img src="./project-pics/molecules.png" className="col-pic" />
            Fibers are randomly distributed and printed while keeping in mind
            the intersection of fibers. If a fiber is trying to be printed in a
            location in which a fiber is placed it is restarted until the max
            amount of fibers (nf) are printed. <br /> <br />
            <strong>
              MATERIAL and ASSIGNMENT <br /> <br />
            </strong>
            The material is manually inputted into the script by two properties.
            ε, Elastic modulus and σ, Poisson ratio. Both the Fiber and the
            matrix are assigned properties which are done by manual script.
            Sections and Assignments are directly done by script which can be
            done via the environment or directly by script.
            <br />
            <p className="center">
              10x10​ | 25 Fibers
              <br />
              Fiber : 1000 MPa | v = .47​
              <br />
              Matrix : 100 MPa | v = .35
              <br />
            </p>
            <img src="./project-pics/multi-molecules.jpg" className="row-pic" />
            <br />
            The Process Modeling to create and predict thermo-chemical
            properties of these generated RVEs was used in conjunction with
            UMASS Lowell's framework for simulating process modeling.
            <br />
          </p>
        </div>
      </section>

      <section className="left-pad" id="RambollXCyrusOne">
        <h2 className="project-title">RambollXCyrusOne</h2>
        <h6 className="details">Spark Competition</h6>
        <h6 className="details">September 2022</h6>
        <p className="minor-details">
          <strong>1st Place</strong>
        </p>
        <div className="duo-container">
          <img src="./project-pics/certificate.jpg" className="duo" />
          <img src="./project-pics/group-pic.jpg" className="duo" />
        </div>
        <div className="mission-statement">
          <h5>Mission Statement</h5>
          <hr />
          <p>
            During the competition, we worked in groups of five to brainstorm
            ideas aimed at supporting and improving sustainability and
            biodiversity for future data centers. At the end of the day, each
            team pitched their solutions to the leadership and experts from
            Ramboll and CyrusOne. The winning team, selected for having the best
            solution, received a prize of $3000 USD to share among themselves.
          </p>
        </div>
        <div className="results">
          <h5 className="subtitle">Results</h5>
          <hr />
          <p className="column">
            I led and guided the ideation for my group and helped us win third
            place overall whilst my idea got a first-place certificate which
            resulted in a $700 prize. The approach I came up with was to use
            heat waste from data centers to contribute to local communities and
            mitigate use of air/water cooling systems with the use of thermal
            heat generators. The approach supported and improved sustainability
            in data centers specifically centered towards carbon and heat
            emissions but also keeping in mind economic feasibility and
            integration within current data center systems
            <img
              src="./project-pics/recycling-diagram.png"
              className="col-pic"
            />
            <br />
          </p>
        </div>
      </section>

      <section className="left-pad" id="Abaqus">
        <h2 className="project-title">PhD Advance Simulations with Abaqus</h2>
        <h6 className="details">Danmarks Tekniske Universitet</h6>
        <h6 className="details">Jan 2023 - May 2023</h6>
        <div className="Context">
          <h5>Context</h5>
          <hr />
          <p className="column">
            As part of the GLASS program, I was required to participate in a
            study abroad experience. I applied to several schools in Europe and
            was fortunate enough to be accepted by all of them. However, I had
            an internship starting in June, and most European schools conclude
            their semesters between July and August. The Technical University of
            Denmark (DTU), which ends its semester in May, was the perfect fit
            for my schedule, so I embarked on a five-month journey in the Nordic
            Region.
            <br /> DTU is renowned in Europe, particularly as one of the
            continent's top engineering schools, with a strong reputation for
            its research in wind energy. Denmark's frequent windy conditions
            make it an ideal location for renewable wind turbines. At DTU, I had
            the opportunity to engage in numerous research projects focused on
            wind turbines, with a particular emphasis on the analysis of the
            turbines themselves, as illustrated below:
            <img src="./project-pics/turbine.png" className="row-pic" />
            This opportunity came across on my lap as a PhD course, and well I
            am an undergrad I was the youngest person in that class, and I ended
            up working mostly alone towards the end and eventually completed
            this course. This was the hardest course I took up until that point
            and it consisted of 5 reports, and to pass the class it required the
            completion of at least 4.
            <br />
          </p>
        </div>
        <div className="report">
          <h5 className="subtitle">
            Report 1 - Cantilever Beam [3D/2D/1D/Elements/Analytical]
          </h5>
          <hr />
          <p className="column">
            <strong>Objective: </strong>
            Compare the Results of deflection of all methods of solving a
            Cantilever Beam 160mm long beam with a thickness of 100mm with a
            Force [P] applied uniformly. Follow the modeling methods and supply
            the Analytical solutions.
            <br /> Images shown below represent the respective models except
            elements and analytical solutions. <br />
            <strong className="center">[3D/2D/1D]</strong>
            <img src="./project-pics/figure-2.png" className="row-pic" />
            <img src="./project-pics/figure-7.png" className="row-pic" />
            <img src="./project-pics/figure-8.jpg" className="row-pic" />
            <img src="./project-pics/figure-9.png" className="row-pic" />
            As we can see, the difference in deflection is minimal ( less than
            1% ) regardless of the modeling method and coordinate. The
            deflection does seem, naturally, to be larger the further along the
            beam we are. The 3D model is the only one to underestimate the
            deflection, while all the 2D or 1D ones overestimate it, which is
            surprising considering FE usually over-stiffens/underestimates
            displacements. Interestingly enough, the 1D-beam is the model having
            the highest error, when compared to analytically.
            <br />
          </p>
        </div>
        <div className="report">
          <h5 className="subtitle">Report 2 - Testing on a Plate </h5>
          <hr />
          <p className="column">
            The task involves conducting a uniaxial tensile test on a quadratic
            plate with unit dimensions while enforcing specific boundary
            conditions as specified in the instructions given in the task. The
            aim is to determine the relationship between the applied force and
            the resulting displacement, which corresponds to the stress-strain
            relationship while accounting for geometric nonlinearity using the
            NLGEOM feature in ABAQUS by turning it ON. The stress-strain curves
            are to be plotted in six combinations between nominal and true
            stress against engineering, logarithmic, and Green-Lagrange strain.
            Firstly, an elastic model with the designated material properties is
            to be established using the ABAQUS CAE environment, following which,
            the geometric nonlinearity is to be enabled with the number of
            increments set to 1000.
            <img src="./project-pics/figure-1.png" className="row-pic" />
            As shown above there isn't any linearity, which is due to the
            consideration of geometrical nonlinearity in the analysis. When I
            increased the Poisson’s ratio to 0.5. With an increase in Poisson’s
            ratio, the material has a higher tendency to deform laterally than
            linearly, making it more difficult to deform in the direction of the
            applied force. As depicted in Figure 2, the relationship between
            true stress and Green-Lagrange strain displays an almost linear
            trend. The increase in Poisson’s ratio has made the material less
            susceptible to deformation in the direction of the applied force,
            resulting in the hardening of the curve. The slope of this curve is
            0.9998, which is almost equal to 1.
            <br />
          </p>
        </div>
        <div className="report">
          <h5 className="subtitle">
            Report 3 - Behavior of Composite Material and Buckling{" "}
          </h5>
          <hr />
          <p className="column">
            The complex behavior and failure mechanisms of composite materials
            necessitate extensive analysis and design. In this report, we
            present a detailed study of composite materials using Abaqus,
            focusing on two main areas: first ply failure and post-buckling
            behavior. In Part 1, we investigate the first ply failure of
            composite materials using Abaqus, exploring various failure analysis
            criteria such as Hashin, Puck, and Tsai-Wu to evaluate the failure
            behavior. We examine the impact of different fiber orientations and
            material properties on first-ply failure behavior, aiming to gain
            insight into the underlying failure mechanisms and identify the most
            appropriate failure criterion for our specific application. The
            Hashin criterion considers different modes of failure, including
            fiber tension, fiber compression, matrix tension, and matrix
            compression, while the Puck criterion takes into account different
            fracture mechanisms in the matrix and fibers, and the Tsai-Wu
            criterion uses a quadratic interaction term to predict failure. By
            varying fiber orientations, we analyze their significant influence
            on the strength and failure modes of composite materials.
            Additionally, we examine how variations in material properties such
            as stiffness and strength affect first-ply failure.
            <br /> In Part 2, we extend our study to include the post-buckling
            behavior of composite materials, using Abaqus to simulate the
            post-buckling behavior of composite plates under different loading
            conditions. We explore the effect of material properties and
            geometry on the post-buckling response, considering different
            loading scenarios and varying the geometry of the composite plates,
            including aspect ratio and thickness. By investigating how changes
            in material properties affect post-buckling behavior, we aim to
            understand the role of these properties in the overall structural
            performance. This study provides a comprehensive understanding of
            the failure mechanisms and post-buckling behavior of composite
            materials using Abaqus. Through analyzing different failure
            criteria, fiber orientations, material properties, and geometric
            configurations, we seek to identify the most effective approaches
            for designing robust composite structures. Future research could
            extend this study by exploring other failure criteria, more complex
            loading conditions, and the impact of environmental factors such as
            temperature and humidity on the failure and post-buckling behavior
            of composite materials.
            <br />
            <strong className="center">Material Properties: </strong>
            <img
              src="./project-pics/material-properties-table.png"
              className="row-pic"
            />
            <strong className="center">Ply Stack Plots: </strong>
            <img
              src="./project-pics/figure-2-3-Layup.png"
              className="row-pic"
            />
            The only difference between the two plates is the composite
            orientation, which indicates the strength lies in the fiber
            direction; the load that was placed is classified as a line load of
            200 Newtons. Different failure criteria such as Tsai-Wu, Tsai-Hill,
            Max stress, and Max strain provide different approaches to predict
            failure in composite materials, and as a result, they can produce
            different results. The different failure criteria are based on
            different theoretical models and assumptions about the behavior of
            composite materials. For example, the Tsai-Wu and Tsai-Hill criteria
            are based on the maximum stress theory, while the Max strain
            criteria are based on the maximum strain theory. Although some are
            based on each other, for the most part, you get different answers to
            each criterion, similar but different where one may predict failure
            sooner than the other, nonetheless one should pick the most
            conservative answer as noted by the Prof. ’better safe than sorry’.
            As the value reaches 1 we get to a point where failure is noted, so
            picking the conservative answer is based on this.
            <br />
            <em>(More in-depth results can be found, contact me)</em>
            <br />
            <strong className="center">Buckling Behaviors:</strong>
            <img src="./project-pics/figures-22-25.png" className="row-pic" />
            <img src="./project-pics/3D-grid.png" className="row-pic" />
            <br />
          </p>
        </div>
        <div className="report">
          <h5 className="subtitle">
            Report 4 - Cracking Tip Simulations and Crack Growth using Cohesive
            Laws
          </h5>
          <hr />
          <p className="column">
            In this analysis, we will be using Abaqus to investigate crack tip
            growth on a 2D planar plates. Crack growth is a complex phenomenon
            that depends on various factors such as the material properties,
            loading conditions, and the presence of defects. One way to model
            crack growth is by using cohesive elements, which simulate the crack
            propagation process by defining a traction-separation relationship
            between the crack surfaces. In this study, we will compare the
            performance of traditional cohesive connections with surface-based
            cohesive interactions for crack growth behavior. The analysis will
            involve the application of different loading conditions to the
            plate, and the results will be compared to experimental data to
            validate the accuracy of the models.
            <br />
            <br /> The model is a quarter-plate with a height of 100 mm and a
            width of 100 mm. The region of the crack is 25 mm in length, and the
            plate is assumed to be made of a material with an elastic modulus of
            200 GPa and a Poisson’s ratio of 0.3. The loading condition is a
            surface traction applied to the top surface of the plate. The
            loading will be controlled using boundary conditions applied to the
            nodes at the top surface of the plate.
            <img
              src="./project-pics/K1-equation.png"
              className="row-pic equation"
            />
            For a finite plate with a crack located centrally under uniform
            uni-axial stress, the stress intensity factor can be calculated
            using the following equation: Given that a equates to 25mm b equates
            to 100 mm and h equates to 200 mm, given the load is 100 MPa. At the
            end Ki = 850.89615 n/mm.
            <img src="./project-pics/plot-of-stress.png" className="row-pic" />
            <img src="./project-pics/contour-plot.png" className="row-pic" />
            <strong className="center">Loading Level: </strong>
            <img src="./project-pics/sigma-equation.png" className="equation" />
            <img src="./project-pics/K-equation.png" className="equation" />
            Where:
            <ul className="list">
              <li>σ (sigma) is the stress intensity factor </li>
              <li>
                K is the stress intensity factor (also known as the fracture
                toughness){" "}
              </li>
              <li>E is the Young’s modulus of the material</li>{" "}
              <li> G is the shear modulus of the material</li>
              <li> ν is the Poisson’s ratio of the material</li>
              <li>
                r is the distance from the crack tip to the point of interest
                (known as the radial distance)
              </li>
            </ul>
            To find the load level where the plate made of steel with K = 80√m
            begins to fail, we need to calculate the maximum stress that the
            plate can withstand before it fails. This can be done by rearranging
            the equation for K to solve for σ, and then plugging in the given
            value of K:
            <div className="duo-container">
              <img src="./project-pics/K-equation.png" className="equation" />
              <p></p>
              <img src="./project-pics/sigma-2.0.png" className="equation" />
            </div>
            Given: K = 80√m
            <img
              src="./project-pics/sigma-example.png"
              className="row-pic equation"
            />
            <strong className="center">
              σ = 334.564 MPa <br />
            </strong>
            This equation gives us the maximum stress that the plate can
            withstand as a function of the radial distance r from the crack tip.
            To find the load level where the plate begins to fail, we need to
            determine the value of r where the stress exceeds the yield strength
            of the material. We can calculate the corresponding load level using
            the equation:
            <img
              src="./project-pics/load-equation.png"
              className="row-pic equation"
            />
            <img src="./project-pics/figure-5.png" className="row-pic" />
            Where different loads were applied from 80,60,40,30, and 20 and as
            you can see from the graph it decreased incrementally. The
            transition from small-scale yielding to yielding domination occurs
            when the plastic zone size at the crack tip reaches the same order
            of magnitude as the crack length. This is typically quantified by
            the dimensionless parameter, the plastic zone size to crack length
            ratio (RP). When RP reaches a value of approximately 0.2, the stress
            state can no longer be assumed to be small-scale yielding. The load
            level at which yielding dominates can be determined by calculating
            the stress intensity factor (K) and comparing it to the yield
            strength of the material. Once the maximum stress level is
            determined using the equations provided earlier, the corresponding
            load level can be calculated using the equation:
            <img src="./project-pics/load-equation.png" className="equation" />
            Where A is the cross-sectional area of the plate. If the maximum
            stress level exceeds the yield strength of the material, yielding
            will dominate and affect the LEFM.
            <strong>Crack Growth using Cohesive Laws</strong>
            <img src="./project-pics/crack-diagram.png" className="col-pic" />
            The contour plot above is the S11 on the deformed structure showing
            just at the initiation of the crack when the first cohesive element
            is fully damaged.
            <img src="./project-pics/moment-rotation.png" className="col-pic" />
            The plot above shows the moment versus the rotation of the reference
            point using specific damping factors such as .0001 as stated per the
            instructions; however it is used to give a more "realistic result"
            compared to my initial damping factor of .01. A moment-rotation
            would show the relationship between the applied moment and the
            resulting rotation of a structural element. In this case, the graph
            can be used to analyze the behavior of the structural element under
            loading, specifically its ductility and resistance to deformation.
            <img
              src="./project-pics/surface-cohesion.png"
              className="col-pic"
            />
            The two-moment rotation graphs show similar results, it suggests
            that both methods used to obtain these results are consistent with
            each other. In the context of crack simulations and fractures, this
            could mean that different numerical methods or experimental
            techniques used to investigate crack behavior lead to similar
            outcomes. It is important to note that even though the two methods
            might be different, the physical principles underlying the problem
            should remain the same, which explains why similar results are
            obtained as the model of the plate is the same/consistent. Overall,
            the similarity of the two graphs suggests that both methods are
            appropriate and valid for investigating the behavior of cracks and
            fractures under the same conditions.
            <img src="./project-pics/figure-10.png" className="col-pic" />
            <br />
          </p>
        </div>
      </section>
    </div>
  );
}

export default Projects;
