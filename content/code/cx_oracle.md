Title: Python: Installing cx_Oracle
Subtitle: Astonishingly tough to get right the first time...
Date: 2017-07-18
Slug: code/cx_oracle
Category: code
Tags: Tutorial, Python, Linux, cx_Oracle
Author: Sean McGlothlin

This may come as a surprise, but when I worked at Oracle, I used an Oracle database. Connection to an Oracle database is established using a module called cx_Oracle when programming in Python. This module, while extremely useful, can be tricky to set up the first time if you're not running Windows. Since I've had to do this several times across several operating systems, I wanted to write an article about it with the hope that it would someone else in the future... and that someone could very well be me when I inevitably forget.

The process for installing cx_Oracle is fairly simple on Windows, as there is an installer that makes this relatively painless. For now, I'll skip this one and redirect you to the [Python Package Index download](https://pypi.python.org/pypi/cx_Oracle/6.0rc1){:target="\_blank"}.

### Requirements

The following components need to be in place for this module to work:

- Python 2.7, 3.4, 3.5, or 3.6 (according to the [documentation](https://cx-oracle.readthedocs.io/en/latest/){:target="\_blank"})
- [Oracle Instant Client](http://www.oracle.com/technetwork/database/features/instant-client/index-097480.html){:target="\_blank"}
- Shared objects need to be linked, as described below
- [cx_Oracle](https://pypi.python.org/pypi/cx_Oracle/6.0rc1){:target="\_blank"} module itself
- **Python, cx_Oracle, and Instant Client *must* all be the same architecture version.** I may have learned this the hard way...

### Configure the Oracle Instant Client and link shared objects

Download and install the Oracle Instant Client that matches your machine's OS and architecture. There are several components of the Instant Client that are available for download separately, but only `basiclite` and `SDK` are needed to make this work. Copy and extract these to a target directory. This directory will be referenced later by environment variables so `cx_Oracle` knows where to find the shared objects.

The "shared objects" I'm referring to are the `*.so` files that come packaged with the Instant Client. Once you've extracted the directory, symbolic links must be created for them in the `instantclient` directory:

	:::bash
	$ ln -s libclntsh.so.11.1 libclntsh.so
	$ ln -s libocci.so.11.1 libocci.so

If you download a different Instant Client version, be sure to adjust the version above accordingly.

#### Modify Environment Variables

The following environment variables must be added to a user profile to use the module. Open `.bashrc` (or equivalent) in your favorite editor and append the following:

	:::bash
	#
	# PATH requirements to use the cx_Oracle Python module.
	# This will allow Python to connect to an Oracle database.
	#
	export PATH=$ORACLE_HOME:$PATH
	export ORACLE_HOME=~/instantclient_11_2
	export LD_LIBRARY_PATH=$ORACLE_HOME:$LD_LIBRARY_PATH
	export PYTHONPATH=/usr/lib/python2.7/site-packages:$PYTHONPATH

Note that these variables may look slightly different in your environment depending on how you have your Python environment configured.

### Install cx_Oracle using pip if possible

This is the easiest way to do it if you're not running Windows. In the example below, I was using Oracle Linux 7. Package names and versions will be different in your environment.

Download the EPEL repository to install pip.

	:::bash
	$ wget https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
	$ rpm -ivh epel-release-latest-7.noarch.rpm

Update packages, then install the required software.

	:::bash
	$ yum install python-pip

Finally, install cx_Oracle and check to make sure everything is linked properly.

	:::bash
	$ pip install cx_Oracle
	$ python

	>>> import cx_Oracle

If you don't see an error message, then pat yourself on the back! It worked.

### Install from source

Installing everything from source is a bit trickier becuase it requires gathering all the dependencies yourself. When I did this from source I was working with Solaris, which required me to install the following:

- GCC
- The `python-devel` package

Download the cx_Oracle archive. Unzip and navigate to the `cx_Oracle/` directory, then run the following command:

	:::bash
	$ python setup.py install --user # omit --user for global install

This should install the python module in a local directory, which needs to be the directory referenced in the environment path (described above). If you get an error related to GCC, make sure you are using GCC version >= 5.2 to compile. I remember this giving me trouble but no longer have a Solaris machine to test it on to confirm.

### Usage

Once the module is installed, it must be imported into the script:

	:::python
	import cx_Oracle

If there are no errors, then cx_Oracle was installed successfully! You should definitely go grab a beer at this point if you're not at work.

For further information, please see the [cx_Oracle documentation](https://cx-oracle.readthedocs.io/en/latest/){:target="\_blank"}.