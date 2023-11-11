import { TechStack } from '../types';

import linux from '../../assets/images/linux.png';
import splunk from '../../assets/images/splunk.svg';
import chronicle from '../../assets/images/chronicle_logo.png';
import suricata from '../../assets/images/suricata.png';
import wireshark from '../../assets/images/wireshark_icon.png';
import python from '../../assets/images/python.svg';
import java from '../../assets/images/java.svg';
import js from '../../assets/images/javascript.svg';
import mysql from '../../assets/images/mysql.svg';
import postgresql from '../../assets/images/PostgreSQL.svg';
import mongodb from '../../assets/images/MongoDB.svg';
import aws from '../../assets/images/aws.svg';
import vpc from '../../assets/images/aws_vpc.png';
import iam from '../../assets/images/aws_iam.png';

export const techStackCyber: TechStack[] = [
	{ src: linux, title: 'Linux' },
	{ src: splunk, title: 'Splunk' },
	{ src: chronicle, title: 'Chronicle' },
	{ src: suricata, title: 'Suricata' },
	{ src: wireshark, title: 'Wireshark' },

	{ src: python, title: 'Python' },
	{ src: java, title: 'Java' },
	{ src: js, title: 'JavaScript' },
	{ src: mysql, title: 'MySQL' },
	{ src: postgresql, title: 'PostgreSQL' },
	{ src: mongodb, title: 'MongoDB' },
	{ src: aws, title: 'AWS' },
	{ src: vpc, title: 'AWS VPC' },
	{ src: iam, title: 'AWS IAM' },
];
