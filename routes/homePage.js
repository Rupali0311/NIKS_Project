const path = require('path')
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/homePage'))
})

router.get('/services/cyberSecurity', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/Services/cyberSecurity'))
})

router.get('/aboutUs', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/about'))
})

router.get('/contactUs', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/contact'))
})

router.get('/courses', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/courses'))
})

router.get('/services/webDevelopment', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/Services/webDevelopment'))
})

router.get('/services/softwareDevelopment', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/Services/softwareDevelopment'))
})

router.get('/services/appDevelopment', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/Services/appDevelopment'))
})

router.get('/services/digitalMarketing', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/Services/digitalMarketing'))
})

router.get('/products/schoolManagementSystem', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/Products/school'))
})

router.get('/career', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/career'))
})

router.get('/products/hospitalManagementSystem', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/Products/hospital'))
})

router.get('/products/digitalMarketing', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/Products/digitalMarketing'))
})

router.get('/products/tourManagementSystem', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/Products/tour'))
})

router.get('/products/mobileSpy', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/Products/mobilespy'))
})

router.get('/products/realEstateManagementSystem', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/Products/realEstate'))
})

router.get('/products/hotelManagementSystem', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/Products/hotel'))
})

router.get('/products/onlineExams', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/Products/online'))
})

router.get('/products/otherProducts', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/Products/otherProducts'))
})


router.get('/products/retailPOS', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/Products/retail'))
})

router.get('/enroll', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/enrol'))
})

router.get('/franchise', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/franchise'))
})

router.get('/enquiry', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/enquiry'))
})
router.get('/training/winterTraining', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/Training/winter'))
})
router.get('/training/summerTraining', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/Training/summer'))
})

router.get('/training/jobGuaranteeTraining', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/Training/jobGuarantee'))
})

router.get('/training/industrialTraining', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/Training/industrial'))
})

router.get('/training/jobOrientedTraining', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/Training/job'))
})

router.get('/workshop/school/informationSecurity', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/Workshop/informationSecurity'))
})

router.get('/workshop/school/webDevelopment', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/Workshop/web_development'))
})
router.get('/workshop/school/softwareDevelopment', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/Workshop/software_dev'))
})
router.get('/workshop/school/androidDevelopment', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/Workshop/android_development'))
})
router.get('/workshop/school/robotics', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/Workshop/robotics'))
})
router.get('/workshop/school/embeddedSystems', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/Workshop/embedded'))
})

router.get('/investors/codeAndPolicies', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/Investors/codeAndPolicies'))
})

router.get('/investors/corporateGovernance', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/Investors/corporateGovernance'))
})
router.get('/investors/financialRelations', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/Investors/financialRelations'))
})
router.get('/investors/initialPublicOffering', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/Investors/initialPublicOffering'))
})




router.get('/workshop/college/informationSecurity', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/collegeWorkshop/informationSecurity'))
})

router.get('/workshop/college/webDevelopment', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/collegeWorkshop/web_development'))
})
router.get('/workshop/college/softwareDevelopment', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/collegeWorkshop/software_dev'))
})
router.get('/workshop/college/androidDevelopment', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/collegeWorkshop/android_development'))
})
router.get('/workshop/college/robotics', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/collegeWorkshop/robotics'))
})
router.get('/workshop/college/embeddedSystems', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/collegeWorkshop/embedded'))
})

router.get('/courses/CandCpp', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/courses/c'))
})

router.get('/courses/java', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/courses/java'))
})

router.get('/courses/ethicalHacking', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/courses/ethical'))
})

router.get('/courses/android', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/courses/android'))
})

router.get('/courses/PHPandMYSQL', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/courses/php'))
})

router.get('/courses/webDevelopment', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/courses/web_dev'))
})

router.get('/courses/softwareDevelopment', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/courses/software_dev'))
})

router.get('/courses/dotNet', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/courses/net'))
})

router.get('/courses/robotics', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/courses/robotics'))
})

router.get('/courses/networking', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/courses/networking'))
})

router.get('/courses/linux', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/courses/linux'))
})

router.get('/courses/embeddedSystem', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/courses/embedded'))
})

router.get('/courses/plc', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/courses/plc'))
})

router.get('/courses/python', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/courses/python'))
})

router.get('/courses/linuxShell', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/courses/linux_shell'))
})

router.get('/courses/digitalMarketing', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/courses/digital_marketing'))
})

router.get('/courses/iot', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/courses/iot'))
})

router.get('/courses/softwareTesting', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/courses/software_testing'))
})

router.get('/courses/dca', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/courses/dca'))
})

router.get('/courses/adca', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/courses/adca'))
})




module.exports = router