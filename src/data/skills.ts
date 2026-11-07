import type { SkillCategory } from '../types'

export const skillCategories: SkillCategory[] = [
  {
    number: '01',
    title: { en: 'IT Infrastructure & System Administration', vi: 'Hạ tầng CNTT & Quản trị hệ thống' },
    description: { en: 'Foundational knowledge of computer networking, user support, IT troubleshooting, and Windows Server administration.', vi: 'Nền tảng về mạng máy tính, hỗ trợ người dùng, xử lý sự cố CNTT và quản trị cơ bản Windows Server.' },
    skills: ['Computer Networking', 'IT Helpdesk', 'IT Support', 'Windows Server', 'Basic System Administration'],
    icon: 'network',
  },
  {
    number: '02',
    title: { en: 'Backend Development', vi: 'Phát triển Backend' },
    description: { en: 'Focused on backend development, designing and implementing RESTful APIs, and working with containerized development environments.', vi: 'Tập trung phát triển Backend, xây dựng RESTful API và sử dụng Docker cho môi trường phát triển.' },
    skills: ['ASP.NET', 'REST API', 'Docker'],
    icon: 'server',
  },
  {
    number: '03',
    title: { en: 'Frontend Development', vi: 'Phát triển Frontend' },
    description: { en: 'Supporting skill: building interfaces and integrating them with backend APIs using ReactJS and JavaScript.', vi: 'Kỹ năng bổ trợ: xây dựng giao diện và tích hợp Backend API bằng ReactJS, JavaScript.' },
    skills: ['HTML', 'CSS', 'JavaScript', 'ReactJS'],
    icon: 'layout',
    supporting: true,
  },
  {
    number: '04',
    title: { en: 'Mobile Development', vi: 'Phát triển Mobile' },
    description: { en: 'Basic practical experience with cross-platform mobile application development using Flutter.', vi: 'Kinh nghiệm thực hành cơ bản về phát triển ứng dụng đa nền tảng với Flutter.' },
    skills: ['Flutter'],
    icon: 'smartphone',
    supporting: true,
  },
]
